export function registerServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;
  if (import.meta.env.DEV) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => registration.unregister());
    }).catch(() => {});
    return;
  }

  window.addEventListener('load', () => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const buildId = typeof __APP_BUILD_ID__ !== 'undefined' ? __APP_BUILD_ID__ : 'dev';
    navigator.serviceWorker.register(`${baseUrl}sw.js?v=${encodeURIComponent(buildId)}`, {
      scope: baseUrl,
      updateViaCache: 'none',
    }).then((registration) => {
      function notifyUpdate(worker) {
        window.dispatchEvent(new CustomEvent('learn-spanish-update-ready', { detail: { worker } }));
      }

      if (registration.waiting && navigator.serviceWorker.controller) {
        notifyUpdate(registration.waiting);
      }

      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            notifyUpdate(worker);
          }
        });
      });

      registration.update().catch(() => {});
    }).catch(() => {});

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (window.__learnSpanishRefreshing) return;
      window.__learnSpanishRefreshing = true;
      window.location.reload();
    });
  });
}
