// NeubauFlimsPortal – Service Worker: macht das Portal installierbar.
// Speichert bewusst nichts zwischen (keine Projektdaten im Cache); alle Anfragen gehen direkt ins Netz.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).catch(() => new Response(
      "<!doctype html><meta charset=utf-8><title>NeubauFlimsPortal</title><body style='font-family:system-ui;padding:40px;background:#ecebe6;color:#24282b'><h1 style='font-weight:700'>Keine Internetverbindung</h1><p>Das Portal liest die Dokumente live aus OneDrive. Bitte Verbindung prüfen und neu laden.</p>",
      {headers: {"Content-Type": "text/html; charset=utf-8"}})));
  }
});
