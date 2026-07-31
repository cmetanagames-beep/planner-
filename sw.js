const CACHE = 'planner-v42';
const PUSH_STATE_CACHE = 'lumo-push-state-v1';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './icon.png'
];

self.addEventListener('message', e => {
  if(e.data && e.data.type === 'SKIP_WAITING'){
    self.skipWaiting();
  }
  if(e.data && e.data.type === 'TASK_SNAPSHOT'){
    const body=JSON.stringify({tasks:Array.isArray(e.data.tasks)?e.data.tasks:[],habits:Array.isArray(e.data.habits)?e.data.habits:[],habitReminder:e.data.habitReminder||{enabled:false},day:e.data.day||'',savedAt:Date.now()});
    e.waitUntil(caches.open(PUSH_STATE_CACHE).then(c=>c.put('./__task_snapshot__',new Response(body,{headers:{'Content-Type':'application/json'}}))));
  }
});
// ===== УСТАНОВКА =====
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

// ===== АКТИВАЦИЯ =====
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k !== CACHE).map(k => caches.delete(k))
  )));
  self.clients.claim();
});

// ===== КЭШ (офлайн) =====
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET' || e.request.url.includes('groq.com')){ return; }
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      if(resp.status === 200 &&
         e.request.url.startsWith(self.location.origin)){
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return resp;
    }).catch(() => {
      if(e.request.mode === 'navigate') return caches.match('./index.html');
      return Response.error();
    }))
  );
});

async function pushAllowed(d){
  if(d.type==='morning')return true;
  if(d.type==='habit'){
    try{
      const cache=await caches.open(PUSH_STATE_CACHE),response=await cache.match('./__task_snapshot__');if(!response)return false;
      const snapshot=await response.json(),pushDay=d.date||new Date().toISOString().slice(0,10),left=(snapshot.habits||[]).filter(h=>snapshot.day!==pushDay||!h.doneToday);if(!snapshot.habitReminder?.enabled||!left.length)return false;
      const key='./__push_seen__/habit:'+pushDay;if(await cache.match(key))return false;await cache.put(key,new Response(String(Date.now())));return true;
    }catch(_){return false;}
  }
  const looksReminder=!!d.taskId||/напоминани|повторное/i.test(String(d.title||''));
  if(!looksReminder)return true;
  try{
    const cache=await caches.open(PUSH_STATE_CACHE),snapshotResp=await cache.match('./__task_snapshot__');
    if(!snapshotResp)return false;
    if(snapshotResp){
      const snapshot=await snapshotResp.json(),tasks=snapshot.tasks||[];
      const body=String(d.taskTitle||d.body||'').trim().toLowerCase();
      const task=tasks.find(t=>String(t.id)===String(d.taskId))||tasks.find(t=>body.includes(String(t.title||'').trim().toLowerCase()));
      if(!task)return false;
      const taskAt=Number(task.scheduledAt)||new Date(task.date+'T'+(task.time||'09:00')).getTime();
      // Одно актуальное напоминание рядом со временем дела; ранние и просроченные push гасим.
      if(Number.isFinite(taskAt)&&(Date.now()>taskAt+10*60000||Date.now()<taskAt-30000))return false;
      const dedupeKey='task:'+task.id+':'+taskAt;
      if(await cache.match('./__push_seen__/'+encodeURIComponent(dedupeKey)))return false;
      await cache.put('./__push_seen__/'+encodeURIComponent(dedupeKey),new Response(String(Date.now())));
    }
  }catch(_){return false;}
  return true;
}
async function currentHabitBody(fallback,pushDay){
  try{const cache=await caches.open(PUSH_STATE_CACHE),r=await cache.match('./__task_snapshot__');if(!r)return fallback;const s=await r.json(),day=pushDay||s.day,left=(s.habits||[]).filter(h=>s.day!==day||!h.doneToday);return left.slice(0,5).map(h=>(h.icon||'⭐')+' '+h.name).join(' · ')||fallback;}catch(_){return fallback;}
}

async function showPush(d){
  if(!(await pushAllowed(d)))return;
  if(self.registration.setAppBadge){
    await self.registration.setAppBadge(d.badgeCount||undefined).catch(()=>{});
  }

  // ── Утренний брифинг ──
  if(d.type === 'morning'){
    await self.registration.showNotification(d.title || '☀️ Доброе утро!', {
        body: d.body || '',
        icon: './icon.png',
        badge: './icon.png',
        vibrate: [50, 80, 50, 80, 50],
        requireInteraction: true,
        tag: 'morning-brief',
        data: { type: 'morning' },
        actions: [
          { action: 'ok',   title: '✅ Всё понял'    },
          { action: 'open', title: '📋 Открыть план'  }
        ]
      });
    return;
  }
  if(d.type === 'habit'){
    const body=await currentHabitBody(d.body||'Отметь сегодняшний ритм',d.date);await self.registration.showNotification(d.title || '🌱 Не забудь о привычках',{body,icon:'./icon.png',badge:'./icon.png',tag:'habit-reminder',data:{type:'habit'}});return;
  }

  // ── Обычное напоминание ──
  await self.registration.showNotification(d.title || '⏰ Напоминание', {
      body: d.body || '',
      icon: './icon.png',
      badge: './icon.png',
      vibrate: [50, 80, 50],
      requireInteraction: true,
      tag: d.taskId || 'reminder',
      data: { taskId: d.taskId },
      actions: [
        { action: 'done',   title: '✅ Выполнено'   },
        { action: 'snooze', title: '⏰ Отложить 1ч'  }
      ]
    });
}

// ===== PUSH — ЕДИНЫЙ ОБРАБОТЧИК =====
self.addEventListener('push', e => {
  let d={};try{d=e.data?e.data.json():{};}catch(_){}
  e.waitUntil(showPush(d));
});

// ===== КЛИК — ЕДИНЫЙ ОБРАБОТЧИК =====
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const action = e.action;
  const data   = e.notification.data || {};

  // ── Утренний брифинг ──
  if(data.type === 'morning'){
    if(action === 'ok') return; // просто закрыть
    // 'open' или обычный тап → открыть
    e.waitUntil(
      clients.matchAll({ type: 'window' }).then(cl => {
        for(const c of cl) if('focus' in c) return c.focus();
        return clients.openWindow('./');
      })
    );
    return;
  }

  // ── Обычное напоминание ──
  const taskId = data.taskId;

  if(action === 'done'){
    e.waitUntil(
      fetch('https://pushevgen.duckdns.org/task-complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskId })
      }).catch(() => {})
    );
    return;
  }

  if(action === 'snooze'){
    e.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cl => {
        for(const c of cl){
          c.postMessage({type:'SNOOZE_TASK',taskId});
          if('focus' in c)return c.focus();
        }
        return clients.openWindow('./?snoozeTask='+encodeURIComponent(taskId||''));
      })
    );
    return;
  }

  // Обычный тап → открыть
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(cl => {
      for(const c of cl) if('focus' in c) return c.focus();
      return clients.openWindow('./');
    })
  );
});

// ===== BACKGROUND SYNC =====
self.addEventListener('sync', e => {
  if(e.tag === 'sync-tasks'){
    e.waitUntil(
      fetch('https://pushevgen.duckdns.org/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ synced: true })
      }).catch(() => {})
    );
  }
});

// ===== PERIODIC SYNC =====
// (запасной вариант если сервер недоступен)
self.addEventListener('periodicsync', e => {
  if(e.tag === 'daily-summary'){
    e.waitUntil(
      self.registration.showNotification('☀️ Доброе утро!', {
        body: 'Открой Lumo — посмотри план на сегодня',
        icon: './icon.png',
        badge: './icon.png',
        tag: 'daily-summary',
        vibrate: [50, 80, 50]
      })
    );
  }
});
