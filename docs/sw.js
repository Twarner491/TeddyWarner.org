// Service Worker for GitHub Pages Cache Control
// This provides client-side caching since GitHub Pages doesn't allow server-side cache headers

const CACHE_NAME = 'teddywarner-v1';
const CACHE_VERSION = '1.0.0';

// Assets to cache immediately on install
const PRECACHE_URLS = [
  '/',
  '/assets/css/index.css',
  '/assets/css/header.css',
  '/assets/css/extra.css',
  '/assets/js/index.js',
  '/assets/js/header.js',
  '/assets/images/TeddyWarner.svg',
  '/assets/images/favicon.png'
];

// Install event - precache critical assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== self.location.origin) {
    return;
  }

  // Different strategies for different content types
  
  // 1. HTML - Network first, fallback to cache
  if (request.headers.get('accept')?.includes('text/html') || false) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // 2. Static assets (CSS, JS, images) - Cache first, fallback to network
  if (
    request.url.includes('/assets/') ||
    request.url.includes('/stylesheets/') ||
    request.url.includes('/javascripts/')
  ) {
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(request).then(response => {
            // Cache successful responses
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
            }
            return response;
          });
        })
    );
    return;
  }

  // 3. Everything else - Network first
  event.respondWith(
    fetch(request)
      .then(response => {
        // Cache successful responses for offline use
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});

// Message event - allow clients to skip waiting
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

