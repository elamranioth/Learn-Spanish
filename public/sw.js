const CACHE_NAME = 'learn-spanish-v29';
const basePath = self.location.pathname.replace(/sw\.js$/, '');
const shellFiles = [
  basePath,
  `${basePath}manifest.webmanifest`,
  `${basePath}icon.svg`,
  `${basePath}icon-192.png`,
  `${basePath}icon-512.png`,
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(shellFiles))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchAndCache = fetch(request).then((response) => {
        if (response && response.ok && response.type !== 'opaque') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });

      if (request.mode === 'navigate') {
        return fetchAndCache.catch(() => cached || caches.match(basePath));
      }

      if (cached) {
        fetchAndCache.catch(() => {});
        return cached;
      }

      return fetchAndCache.catch(() => new Response('', { status: 504, statusText: 'Offline' }));
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
