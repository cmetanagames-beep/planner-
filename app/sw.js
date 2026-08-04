const CACHE = 'planner-v127';
const PUSH_STATE_CACHE = 'lumo-push-state-v1';
const PUSH_TRACE_API='https://pushevgen.duckdns.org/telemetry/push-state';
function tracePush(d,stage,detail=''){if(!d?.traceKey)return Promise.resolve();return fetch(PUSH_TRACE_API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({traceKey:d.traceKey,type:d.type||'',stage,detail}),keepalive:true}).catch(()=>{});}
async function saveLocalPushJourney(d,stage,detail=''){
  try{const cache=await caches.open(PUSH_STATE_CACHE),previousResponse=await cache.match('./__last_push_journey__'),previous=previousResponse?await previousResponse.json():{};const journey={...previous,type:d?.type||previous.type||'',title:d?.title||previous.title||'',traceKey:d?.traceKey||previous.traceKey||'',scheduledAt:d?.scheduledAt||previous.scheduledAt||0,stage,detail,updatedAt:Date.now()};await cache.put('./__last_push_journey__',new Response(JSON.stringify(journey),{headers:{'Content-Type':'application/json'}}));}catch(_){}
}

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/css/app.css?v=127',
  './assets/vendor/jsQR-1.4.0.js?v=127',
  './assets/js/app.js?v=127',
  './assets/vendor/tesseract-5.1.1.min.js',
  './assets/icons/icon.svg',
  './assets/icons/icon.png'
];

self.addEventListener('message', e => {
  if(e.data && e.data.type === 'SKIP_WAITING'){
    self.skipWaiting();
  }
  if(e.data && e.data.type === 'TASK_SNAPSHOT'){
    const body=JSON.stringify({tasks:Array.isArray(e.data.tasks)?e.data.tasks:[],habits:Array.isArray(e.data.habits)?e.data.habits:[],habitReminder:e.data.habitReminder||{enabled:false},shopping:Array.isArray(e.data.shopping)?e.data.shopping:[],shoppingReminder:e.data.shoppingReminder||{enabled:true},day:e.data.day||'',savedAt:Date.now()});
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
    keys.filter(k => k !== CACHE && k !== PUSH_STATE_CACHE).map(k => caches.delete(k))
  )));
  self.clients.claim();
});

// ===== КЭШ (офлайн) =====
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET'){ return; }
  if(e.request.mode === 'navigate'){
    e.respondWith(fetch(e.request,{cache:'no-store'}).then(resp=>{
      if(resp.status===200){const clone=resp.clone();caches.open(CACHE).then(c=>c.put('./index.html',clone));}
      return resp;
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      if(resp.status === 200 &&
         e.request.url.startsWith(self.location.origin)){
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return resp;
    }).catch(() => Response.error()))
  );
});

function familyPushKind(d){
  if(['family-task','family-shopping','shopping-reminder'].includes(d.type))return d.type;
  const title=String(d.title||'').toLowerCase();
  if(/поручен|делегир|новая задача/.test(title))return 'family-task';
  if(/общ.*покуп|список покупок/.test(title))return 'family-shopping';
  return d.type||'';
}
async function pushAllowed(d){
  if(d.type==='focus'){
    try{const cache=await caches.open(PUSH_STATE_CACHE),r=await cache.match('./__focus_timer__');if(!r)return true;const s=await r.json();return !!s.active&&String(s.taskId)===String(d.taskId)&&Number(s.endAt)===Number(d.endAt);}catch(_){return true}
  }
  const kind=familyPushKind(d);
  if(kind==='family-task'||kind==='family-shopping'){
    try{const cache=await caches.open(PUSH_STATE_CACHE),eventId=String(d.eventId||d.assignId||d.taskId||d.createdAt||((d.title||'')+':'+(d.body||''))),key='./__push_seen__/family:'+encodeURIComponent(eventId);if(await cache.match(key))return false;await cache.put(key,new Response(String(Date.now())));return true}catch(_){return true}
  }
  if(kind==='shopping-reminder'){
    try{const cache=await caches.open(PUSH_STATE_CACHE),r=await cache.match('./__task_snapshot__');if(!r)return false;const s=await r.json(),items=s.shopping||[];if(!s.shoppingReminder?.enabled||!items.length)return false;const key='./__push_seen__/shopping:'+String(d.date||s.day||'');if(await cache.match(key))return false;await cache.put(key,new Response(String(Date.now())));return true}catch(_){return false}
  }
  if(d.type==='morning')return true;
  if(d.type==='morning-review'||d.type==='evening-review'){
    try{const cache=await caches.open(PUSH_STATE_CACHE),key='./__push_seen__/day-review:'+d.type+':'+String(d.date||'');if(await cache.match(key))return false;await cache.put(key,new Response(String(Date.now())));return true}catch(_){return true}
  }
  if(d.type==='insight'){
    try{const cache=await caches.open(PUSH_STATE_CACHE),key='./__push_seen__/insight:'+String(d.date||'')+':'+String(d.title||'');if(await cache.match(key))return false;await cache.put(key,new Response(String(Date.now())));return true}catch(_){return true}
  }
  if(d.type==='habit'||d.type==='habit-rescue'){
    try{
      const cache=await caches.open(PUSH_STATE_CACHE),response=await cache.match('./__task_snapshot__');if(!response)return false;
      const snapshot=await response.json(),pushDay=d.date||new Date().toISOString().slice(0,10),left=(snapshot.habits||[]).filter(h=>snapshot.day!==pushDay||!h.doneToday);if(!snapshot.habitReminder?.enabled||!left.length||(d.type==='habit-rescue'&&snapshot.habitReminder?.adaptive===false))return false;
      const key='./__push_seen__/'+d.type+':'+pushDay;if(await cache.match(key))return false;await cache.put(key,new Response(String(Date.now())));return true;
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
      const now=Date.now(),stage=String(d.stage||'start');
      const windows={important2h:[-150,-45],h1:[-75,-20],m30:[-45,0],start:[-5,10],overdue:[10,24*60]};
      const windowMin=windows[stage]||windows.start;
      const deltaMin=(now-taskAt)/60000;
      if(Number.isFinite(taskAt)&&(deltaMin<windowMin[0]||deltaMin>windowMin[1]))return false;
      const dedupeKey=d.eventKey||('task:'+task.id+':'+taskAt+':'+stage);
      if(await cache.match('./__push_seen__/'+encodeURIComponent(dedupeKey)))return false;
      await cache.put('./__push_seen__/'+encodeURIComponent(dedupeKey),new Response(String(Date.now())));
    }
  }catch(_){return false;}
  return true;
}
async function currentHabitBody(fallback,pushDay){
  try{const cache=await caches.open(PUSH_STATE_CACHE),r=await cache.match('./__task_snapshot__');if(!r)return fallback;const s=await r.json(),day=pushDay||s.day,left=(s.habits||[]).filter(h=>s.day!==day||!h.doneToday);return left.slice(0,5).map(h=>(h.icon||'⭐')+' '+h.name).join(' · ')||fallback;}catch(_){return fallback;}
}
async function currentShoppingBody(fallback){
  try{const cache=await caches.open(PUSH_STATE_CACHE),r=await cache.match('./__task_snapshot__');if(!r)return fallback;const s=await r.json(),items=s.shopping||[];return items.slice(0,5).map(x=>x.t).join(' · ')||fallback;}catch(_){return fallback;}
}

async function showPush(d){
  d.type=familyPushKind(d);
  if(!(await pushAllowed(d))){await Promise.all([tracePush(d,'suppressed','client policy'),saveLocalPushJourney(d,'suppressed','Повтор или устаревшее уведомление отменено')]);return;}
  await Promise.all([tracePush(d,'displayed',d.stage||''),saveLocalPushJourney(d,'displayed',d.stage||'')]);
  if(self.registration.setAppBadge){
    await self.registration.setAppBadge(d.badgeCount||undefined).catch(()=>{});
  }

  // ── Утренний брифинг ──
  if(d.type === 'morning'){
    await self.registration.showNotification(d.title || '☀️ Доброе утро!', {
        body: d.body || '',
        icon: './assets/icons/icon.png',
        badge: './assets/icons/icon.png',
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
  if(d.type === 'habit'||d.type==='habit-rescue'){
    const body=await currentHabitBody(d.body||'Отметь сегодняшний ритм',d.date);await self.registration.showNotification(d.title || (d.type==='habit-rescue'?'Вернём привычку в ритм?':'Не забудь о привычках'),{body,icon:'./assets/icons/icon.png',badge:'./assets/icons/icon.png',tag:d.type,data:{type:d.type}});return;
  }
  if(d.type==='morning-review'||d.type==='evening-review'){
    await self.registration.showNotification(d.title||'Обзор дня',{body:d.body||'',icon:'./assets/icons/icon.png',badge:'./assets/icons/icon.png',tag:d.type,data:{type:'insight',prompt:d.prompt||'',summary:(d.title||'')+(d.body?' — '+d.body:'')},actions:[{action:'discuss',title:'Открыть обзор'},{action:'later',title:'Позже'}]});return;
  }
  if(d.type === 'insight'){
    await self.registration.showNotification(d.title || 'Предложение Lumo',{
      body:d.body||'Открой помощника, чтобы посмотреть рекомендацию',icon:'./assets/icons/icon.png',badge:'./assets/icons/icon.png',tag:'smart-insight',
      data:{type:'insight',prompt:d.prompt||'',summary:(d.title||'')+(d.body?' — '+d.body:'')},actions:[{action:'discuss',title:'Обсудить с Lumo'},{action:'later',title:'Позже'}]
    });return;
  }
  if(d.type === 'focus'){
    await self.registration.showNotification(d.title||'⏱ Время вышло',{body:d.body||'Фокус завершён',icon:'./assets/icons/icon.png',badge:'./assets/icons/icon.png',vibrate:[100,80,100,80,180],requireInteraction:true,tag:'focus:'+String(d.taskId||'task')+':'+String(d.endAt||''),data:{type:'focus',taskId:String(d.taskId||'')}});try{const cache=await caches.open(PUSH_STATE_CACHE);await cache.put('./__focus_timer__',new Response(JSON.stringify({active:false,taskId:d.taskId,endAt:d.endAt,finishedAt:Date.now()}),{headers:{'Content-Type':'application/json'}}));}catch(_){}return;
  }
  if(d.type==='system-update'){await self.registration.showNotification(d.title||'Обновление Lumo',{body:d.body||'',icon:'./assets/icons/icon.png',badge:'./assets/icons/icon.png',tag:d.eventKey||'system-update',data:{type:'system-update',traceKey:d.traceKey||''},actions:[{action:'update',title:'Обновить'}]});return;}
  if(d.type === 'family-task'){
    await self.registration.showNotification(d.title||'📥 Новое поручение',{body:d.body||d.taskTitle||'Тебе передали новое дело',icon:'./assets/icons/icon.png',badge:'./assets/icons/icon.png',tag:'family-task:'+(d.eventId||d.assignId||d.taskId||'new'),data:{type:'family-task',eventId:d.eventId||d.assignId||'',taskId:d.taskId||''},actions:[{action:'open',title:'Открыть дело'}]});return;
  }
  if(d.type === 'family-shopping'){
    await self.registration.showNotification(d.title||'🛒 Новая общая покупка',{body:d.body||'В семейном списке появилась новая позиция',icon:'./assets/icons/icon.png',badge:'./assets/icons/icon.png',tag:'family-shopping:'+(d.eventId||d.createdAt||'new'),data:{type:'family-shopping',eventId:d.eventId||''},actions:[{action:'open',title:'Открыть список'}]});return;
  }
  if(d.type === 'assignment-response'){
    await self.registration.showNotification(d.title||'Ответ на поручение',{body:d.body||'',icon:'./assets/icons/icon.png',badge:'./assets/icons/icon.png',tag:'assignment-response:'+(d.eventId||'new'),data:{type:'notification-center'}});return;
  }
  if(d.type === 'shopping-reminder'){
    const body=await currentShoppingBody(d.body||'В списке остались покупки');await self.registration.showNotification(d.title||'🛒 Не забудь про покупки',{body,icon:'./assets/icons/icon.png',badge:'./assets/icons/icon.png',tag:'shopping-reminder',data:{type:'shopping-reminder'},actions:[{action:'open',title:'Открыть список'}]});return;
  }

  // ── Обычное напоминание ──
  await self.registration.showNotification(d.title || '⏰ Напоминание', {
      body: d.body || '',
      icon: './assets/icons/icon.png',
      badge: './assets/icons/icon.png',
      vibrate: [50, 80, 50],
      requireInteraction: true,
      tag: d.eventKey || d.taskId || 'reminder',
      data: { type:d.type||'task-reminder', taskId:d.taskId, stage:d.stage||'', traceKey:d.traceKey||'' },
      actions: [
        { action: 'done',   title: '✅ Выполнено'   },
        { action: 'snooze', title: '⏰ Через 15 минут'  }
      ]
    });
}

// ===== PUSH — ЕДИНЫЙ ОБРАБОТЧИК =====
self.addEventListener('push', e => {
  let d={};try{d=e.data?e.data.json():{};if(d.notification&&typeof d.notification==='object')d={...d,...d.notification};}catch(_){}
  e.waitUntil(showPush(d));
});

// ===== КЛИК — ЕДИНЫЙ ОБРАБОТЧИК =====
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const action = e.action;
  const data   = e.notification.data || {};
  e.waitUntil(Promise.all([tracePush(data,action?'action':'opened',action||'open'),saveLocalPushJourney(data,action?'action':'opened',action||'open')]));

  if(data.type === 'insight'){
    if(action==='later')return;
    const payload={prompt:data.prompt||'',summary:data.summary||''};
    e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(cl=>{
      for(const c of cl){c.postMessage({type:'OPEN_INSIGHT',...payload});if('focus'in c)return c.focus()}
      return clients.openWindow('./?assistantInsight='+encodeURIComponent(JSON.stringify(payload)));
    }));return;
  }
  if(data.type==='system-update'){e.waitUntil(clients.openWindow('./?forceUpdate=1'));return;}
  if(data.type==='focus'){
    e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(cl=>{for(const c of cl){c.postMessage({type:'OPEN_FOCUS',taskId:data.taskId||''});if('focus'in c)return c.focus();}return clients.openWindow('./?focusDone='+encodeURIComponent(data.taskId||''));}));return;
  }
  if(data.type==='family-task'){
    const taskId=data.taskId||data.eventId||'';
    e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(cl=>{
      for(const c of cl){c.postMessage({type:'OPEN_FAMILY_TASK',taskId});if('focus'in c)return c.focus();}
      return clients.openWindow('./?familyTask='+encodeURIComponent(taskId));
    }));return;
  }
  if(data.type==='family-shopping'||data.type==='shopping-reminder'){
    e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(cl=>{
      for(const c of cl){c.postMessage({type:'OPEN_SHOPPING'});if('focus'in c)return c.focus();}
      return clients.openWindow('./?openShopping=1');
    }));return;
  }
  if(data.type==='notification-center'){
    e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(cl=>{for(const c of cl){if('focus'in c)return c.focus().then(()=>c.postMessage({type:'OPEN_NOTIFICATION_CENTER'}));}return clients.openWindow('./?notifications=1');}));return;
  }

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
      clients.matchAll({type:'window',includeUncontrolled:true}).then(cl=>{for(const c of cl){c.postMessage({type:'COMPLETE_TASK',taskId});if('focus'in c)return c.focus();}return clients.openWindow('./?completeTask='+encodeURIComponent(taskId||''));})
    );
    return;
  }

  if(action === 'snooze'){
    e.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cl => {
        for(const c of cl){
          c.postMessage({type:'SNOOZE_TASK_15',taskId});
          if('focus' in c)return c.focus();
        }
        return clients.openWindow('./?snoozeTask15='+encodeURIComponent(taskId||''));
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
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then(openClients => {
        openClients.forEach(client => client.postMessage({ type: 'FLUSH_OFFLINE_QUEUE' }));
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
        icon: './assets/icons/icon.png',
        badge: './assets/icons/icon.png',
        tag: 'daily-summary',
        vibrate: [50, 80, 50]
      })
    );
  }
});
