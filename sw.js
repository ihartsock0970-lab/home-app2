const CACHE='home-v070-1';
const FILES=['./','index.html','style.css?v=70','app.js?v=70','sky.jpg','dunes.svg','ocean.svg','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('home-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{let u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin||u.pathname.includes('/api/'))return;if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match(new URL('index.html',self.registration.scope)).then(r=>r||Response.error())));return}e.respondWith(caches.open(CACHE).then(async c=>{let saved=await c.match(e.request);return saved||fetch(e.request)}))});
