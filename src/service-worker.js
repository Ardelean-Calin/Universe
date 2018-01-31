// Save resources in cache
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("calin-cache-v2").then(function(cache) {
      return cache.addAll(["index.html", "bundle.js", "styles.css"]);
    })
  );
});

// Fetch resources from cache if there are any saved.
// TODO: Also add on-the-go caching for those ugly image files
//       or find a solution to cache them at install.
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(cacheName) {
            if (cacheName == "my-cache") {
              return true;
            } else {
              return false;
            }
          })
          .map(function(cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});
