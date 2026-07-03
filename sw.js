const CACHE_NAME = 'suarawarga-cache-v5'; // Naikkan versi ke v5 agar HP memaksa update
const urlsToCache = [
  '/suarawarga/',              // Alamat utama folder kamu
  '/suarawarga/index.html',    // Tambahkan /suarawarga/ di depan semua file
  '/suarawarga/style.css',
  '/suarawarga/script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Menambahkan kode untuk membersihkan cache lama saat versi baru aktif
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});