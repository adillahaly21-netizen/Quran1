// Ganti nomor versi setiap kali file aplikasi/aset offline diperbarui.
const CACHE_NAME = "quran-harian-v3";
const APP_FILES = [
  "./", "./index.html", "./style.css", "./app.js", "./manifest.json", "./assets/icon.svg",
  "./assets/mushaf/001.webp", "./assets/mushaf/002.webp", "./assets/mushaf/003.webp",
  "./assets/mushaf/004.webp", "./assets/mushaf/005.webp", "./assets/mushaf/006.webp",
  "./assets/mushaf/007.webp", "./assets/mushaf/008.webp", "./assets/mushaf/009.webp",
  "./assets/mushaf/010.webp"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith("quran-harian-") && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response && response.ok) caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
      return response;
    } catch (error) {
      if (event.request.mode === "navigate") return (await caches.match("./index.html")) || Response.error();
      return new Response("Konten ini belum tersimpan offline.", {status:503,headers:{"Content-Type":"text/plain; charset=utf-8"}});
    }
  })());
});
