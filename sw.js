/* Service Worker: lightweight caching for faster navigation on a static portfolio
   - HTML: network-first (fresh when online, fast fallback when offline)
   - CSS/JS: stale-while-revalidate
   - Images: cache-first with a small cap (to avoid unbounded storage)
*/

const VERSION = 'v112';
const CACHE_STATIC = `static-${VERSION}`;
const CACHE_PAGES = `pages-${VERSION}`;
const CACHE_IMAGES = `images-${VERSION}`;

// Homepage "above the fold" thumbnails (first 3 cards).
// Precached so they survive gallery browsing and returning home feels instant.
// We only include formats the browser will actually request (avif > webp > fallback).
const HOME_THUMB_URLS = [
  // Project 1 (avif/webp/jpg)
  './images/project1/picweb/ra15_Terminal_0013 (1).avif',
  './images/project1/picweb/ra15_Terminal_0013 (1).webp',
  './images/project1/ra15_Terminal_0013 (1).jpg',
  // Project 2
  './images/project2/picweb/hlavni copy.avif',
  './images/project2/picweb/hlavni copy.webp',
  './images/project2/hlavni copy.jpg',
  // Project 3
  './images/project3/picweb/1.avif',
  './images/project3/picweb/1.webp',
  './images/project3/1.jpg',
];

// Keep this list small; images are handled at runtime.
const PRECACHE_URLS = [
  './',
  './index.html',
  './favicon.svg',
  './style.css',
  './script.js',
  './about.html',
  './about.css',
  './legal.html',
  './legal.css',
  './project-page.css',
  './projects/project1.html',
  './projects/project2.html',
  './projects/project3.html',
  './projects/project4.html',
  './projects/project5.html',
  './projects/project6.html',
  './projects/project7.html',
  './projects/project8.html',
  './projects/project9.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_STATIC);
    await cache.addAll(PRECACHE_URLS);

    // Pre-warm homepage thumbnails into the images cache.
    // They go into CACHE_IMAGES so the same cache-first logic serves them,
    // but we add them early so they're ready before user even visits home.
    const imgCache = await caches.open(CACHE_IMAGES);
    await Promise.all(
      HOME_THUMB_URLS.map((url) =>
        imgCache.add(url).catch(() => {
          // Silently ignore if file doesn't exist (e.g. typo, missing format)
        })
      )
    );

    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter((k) => ![CACHE_STATIC, CACHE_PAGES, CACHE_IMAGES].includes(k))
        .map((k) => caches.delete(k))
    );
    self.clients.claim();
  })());
});

async function cacheFirst(request, cacheName, { maxEntries } = {}) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  const res = await fetch(request);
  // Only cache successful same-origin responses
  if (res && res.ok) {
    cache.put(request, res.clone());
    if (typeof maxEntries === 'number') {
      trimCache(cacheName, maxEntries).catch(() => {});
    }
  }
  return res;
}

async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const res = await fetch(request);
    if (res && res.ok) cache.put(request, res.clone());
    return res;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;
    // As a last resort, fall back to the homepage (useful offline)
    return (await caches.open(CACHE_STATIC)).match('./index.html');
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((res) => {
      if (res && res.ok) cache.put(request, res.clone());
      return res;
    })
    .catch(() => null);

  return cached || (await fetchPromise) || cached;
}

async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  // Delete oldest entries first
  const toDelete = keys.slice(0, keys.length - maxEntries);
  await Promise.all(toDelete.map((req) => cache.delete(req)));
}

self.addEventListener('fetch', (event) => {
  const req = event.request;

  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // Navigation (HTML pages)
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(networkFirst(req, CACHE_PAGES));
    return;
  }

  // Images (limit to keep storage bounded)
  if ((req.headers.get('accept') || '').includes('image/')) {
    // Total images in this portfolio are ~244; keep extra headroom for fallbacks.
    event.respondWith(cacheFirst(req, CACHE_IMAGES, { maxEntries: 320 }));
    return;
  }

  // CSS/JS/fonts
  event.respondWith(staleWhileRevalidate(req, CACHE_STATIC));
});




