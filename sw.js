const NOME_CACHE = "adedonha-v1";
const ARQUIVOS = [
  "./",
  "./index.html",
  "./style.css",
  "./manifest.json",
  "./icon.png"
];

// 1. Instala o App na memória (Cache)
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(NOME_CACHE).then((cache) => {
      return cache.addAll(ARQUIVOS);
    })
  );
});

// 2. Quando abrir, pega da memória (Turbo) em vez da internet
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((resposta) => {
      return resposta || fetch(e.request);
    })
  );
});

