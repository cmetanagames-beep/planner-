const CACHE = 'planner-v34';

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

// ===== PUSH — ЕДИНЫЙ ОБРАБОТЧИК =====
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch(_) {}
  if(self.registration.setAppBadge){
    self.registration.setAppBadge(d.badgeCount||undefined).catch(()=>{});
  }

  // ── Утренний брифинг ──
  if(d.type === 'morning'){
    e.waitUntil(
      self.registration.showNotification(d.title || '☀️ Доброе утро!', {
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
      })
    );
    return;
  }

  // ── Обычное напоминание ──
  e.waitUntil(
    self.registration.showNotification(d.title || '⏰ Напоминание', {
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
    })
  );
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
