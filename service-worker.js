---
---
'use strict';

const VERSION = 'cache-v{{site.time | replace:" ","" | replace:":","" | replace:"-",""}}';

const urls = [
  '/',
  '/404.html',
  '/index.html',
  '/robots.txt',
  '/manifest.json',
  '/assets/images/icon-128x128.png',
  '/assets/images/icon-144x144.png',
  '/assets/images/icon-152x152.png',
  '/assets/images/icon-192x192.png',
  '/assets/images/icon-512x512.png',
  '{{ site.logo }}',

  '/assets/styles/danilolutz.css',
  'https://cdn.jsdelivr.net/npm/modern-normalize@0.5.0/modern-normalize.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(urls)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== VERSION)
        .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
