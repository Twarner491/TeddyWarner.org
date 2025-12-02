// Service Worker for GitHub Pages Cache Control
// This provides client-side caching since GitHub Pages doesn't allow server-side cache headers

const CACHE_NAME = 'teddywarner-v2';
const CACHE_VERSION = '2.0.0';

// Cache duration: 1 year for static assets (as recommended by PageSpeed Insights)
const CACHE_MAX_AGE = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds

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
  // These are immutable assets that can be cached for 1 year
  if (
    request.url.includes('/assets/') ||
    request.url.includes('/stylesheets/') ||
    request.url.includes('/javascripts/')
  ) {
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            // Check if cached response is still fresh (within 1 year)
            const cachedDate = new Date(response.headers.get('date') || new Date());
            const now = new Date();
            const age = now - cachedDate;
            
            // If cache is still fresh, return it
            if (age < CACHE_MAX_AGE) {
              return response;
            }
          }
          
          // Fetch from network and cache
          return fetch(request).then(response => {
            // Cache successful responses with custom headers
            if (response.status === 200) {
              const responseClone = response.clone();
              const headers = new Headers(response.headers);
              headers.set('Cache-Control', 'public, max-age=31536000, immutable');
              headers.set('date', new Date().toUTCString());
              
              const cachedResponse = new Response(responseClone.body, {
                status: response.status,
                statusText: response.statusText,
                headers: headers
              });
              
              caches.open(CACHE_NAME).then(cache => cache.put(request, cachedResponse));
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

