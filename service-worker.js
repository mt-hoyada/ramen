const CACHE_NAME = "seongyang-cache-v1";
const urlsToCache = [
  "./성양.html",
  "./manifest.json",
  "./icon-192x192.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
}); 