const CACHE = 'lumo-console-v6';
const ASSETS = ['./','./index.html','./manifest.json','./assets/dev.css?v=6','./assets/console.css?v=6','./assets/dev.js?v=6','./assets/developer.svg','./assets/developer.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('lumo-console-') && key !== CACHE).map(key => caches.delete(key))))); self.clients.claim(); });
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) return;
  event.respondWith(fetch(event.request).then(response => { if (response.ok) caches.open(CACHE).then(cache => cache.put(event.request, response.clone())); return response; }).catch(() => caches.match(event.request).then(cached => cached || (event.request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
