const CACHE='planner-v2';
const ASSETS=['./','./index.html','./manifest.json'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});

// ===== PUSH (фоновые уведомления) =====
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch(_) {}
  e.waitUntil(self.registration.showNotification(d.title || '⏰ Напоминание', {
    body: d.body || '',
    icon: './icon.png',
    badge: './icon.png',
    vibrate: [50,80,50],
    requireInteraction: true,   // ← добавили: уведомление не исчезнет само (Android/desktop)
    tag: d.taskId || 'reminder' // ← добавили: повторные пуши по той же задаче будут заменять старые, а не копиться стопкой
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({type:'window'}).then(cl => {
    for (const c of cl) if ('focus' in c) return c.focus();
    return clients.openWindow('./');
  }));
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
  )));
  self.clients.claim();
});

self.addEventListener('fetch',e=>{
  if(e.request.url.includes('groq.com')){ return; }
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{
      if(e.request.method==='GET'&&resp.status===200&&e.request.url.startsWith(self.location.origin)){
        const clone=resp.clone();
        caches.open(CACHE).then(c=>c.put(e.request,clone));
      }
      return resp;
    }).catch(()=>caches.match('./index.html')))
  );
});
