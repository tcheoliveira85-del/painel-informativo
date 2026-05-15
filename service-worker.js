const CACHE_NAME = "painel-equipe-d-v1.10";

const LOCAL_ASSETS = [
  "./",
  "index.html",
  "dados.js",
  "manifest.json",
  "logoPort.png",
  "Forklift icon.png",
  "vessel icon.png",
  "train icon.png",
  "DNA icon.png",
  "Mascote turma D.png",
  "Mascote.png",
  "Comunicados Portocel.jpg",
  "Comunicados Portocel1.jpg",
  "Comunicados Portocel2.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(LOCAL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then(cached => cached || caches.match("index.html")))
  );
});
