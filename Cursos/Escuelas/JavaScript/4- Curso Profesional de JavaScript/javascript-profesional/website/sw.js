const VERSION = 'v1';

self.addEventListener('install', event => {
  event.waitUntil(precache()); // Creamos un precache.
});

// Cada que ocurra una petición, el ServiceWorker haga algo...
self.addEventListener('fetch', event => {
  const request = event.request; // Extraemos la petición
  // trabajamos sólo con las peticiones 'get'
  if (request.method !== 'GET') {
    return;
  }

  // buscamos en cache si ya lo tenemos o no.
  event.respondWith(cachedResponse(request));

  // actualizar el cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION); // Abrimos un cache especifico.

  // Añadimos varios recursos.
  return cache.addAll([
    // '/',
    // '/index.html',
    // '/assets/index.js',
    // '/assets/MediaPlayer.js',
    // '/assets/plugins/AutoPlay.js',
    // '/assets/plugins/AutoPause.ts',
    // '/assets/index.css',
    // '/assets/BigBuckBunny.mp4',
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION); // Abrimos un cache especifico.
  const response = await cache.match(request); // Le preguntamos al cache si, ya tienes una copia que le corresponde al request si o no.
  return response || fetch(request); // Sí el 'response' sea 'undefined' debemos contestar con lo que nos de la red, es decir, de internet.
}

/**
 * Busca una copia actualizada del recurso.
 * @param {httpRequest} request Petición request.
 * @returns 
 */
async function updateCache(request) {
  const cache = await caches.open(VERSION); // Abrimos un cache especifico.
  const response = await fetch(request); // Buscamos una copia actualizada.
  return cache.put(request, response); // Añadimos el nuevo contenido al cache.
}
