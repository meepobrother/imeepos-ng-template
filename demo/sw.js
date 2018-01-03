self.addEventListener('install', function (event) {
    console.log(event);
    event.waitUntil(
        caches.open('assets').then(function (cache) {
            return cache.addAll([
                './assets/'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request).then(function (response) {
        if (response !== undefined) {
            return response;
        } else {
            return fetch(event.request).then(function (response) {
                let responseClone = response.clone();
                caches.open('./assets').then(function (cache) {
                    cache.put(event.request, responseClone);
                });
                return response;
            }).catch(function () {
                return caches.match('./assets/**/**.jpg');
            });
        }
    }));
});