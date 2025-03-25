const CACHE_NAME = 'tmdbzone-api-cache-v1';
const TRENDING_REFRESH_INTERVAL = 30 * 60 * 1000;

self.addEventListener('install', (event) => {
    console.log('[SW] Installing Service Worker');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Cache abierto');
                return cache.addAll(['/']);
            })
    );
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    if (url.pathname.includes('/discover') ||
        url.pathname.includes('/trending') ||
        url.pathname.includes('/popular') ||
        url.pathname.includes('/search')) {

        event.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return cache.match(event.request).then(response => {
                    const fetchPromise = fetch(event.request).then(networkResponse => {
                        console.log(`[SW] Actualizando cache para: ${url.pathname}`);
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    }).catch(err => {
                        console.log('[SW] Error en fetch, sirviendo desde cache', err);
                        return response;
                    });

                    return response || fetchPromise;
                });
            })
        );
    } else {
        event.respondWith(
            caches.match(event.request)
                .then(response => response || fetch(event.request))
        );
    }
});

self.addEventListener('message', (event) => {
    if (event.data.type === 'UPDATE_CACHE') {
        console.log('[SW] Mensaje recibido para actualizar cache');
        updateCache();
    }
});

function updateCache() {
    console.log('[SW] Iniciando actualización de cache');
    const urlsToUpdate = ['/trending', '/discover', '/popular'];

    caches.open(CACHE_NAME).then(cache => {
        urlsToUpdate.forEach(url => {
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        cache.put(url, response.clone());
                        console.log(`[SW] Cache actualizado para: ${url}`);
                    }
                })
                .catch(err => console.error(`[SW] Error actualizando ${url}:`, err));
        });
    });
}

setInterval(() => {
    self.clients.matchAll().then(clients => {
        clients.forEach(client => {
            console.log('[SW] Notificando cliente para actualizar UI');
            client.postMessage({ type: 'REFRESH_DATA' });
        });
    });
}, TRENDING_REFRESH_INTERVAL);