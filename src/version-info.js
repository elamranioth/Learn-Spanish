export const APP_VERSION = '7';

export function getBuildId() {
  if (typeof __APP_BUILD_ID__ !== 'undefined') return __APP_BUILD_ID__;
  return 'dev';
}

export function getVersionLabel() {
  const buildId = String(getBuildId());
  if (buildId === 'dev') return `Lexiora ${APP_VERSION} dev`;
  const datePart = buildId.slice(0, 10);
  return `Lexiora ${APP_VERSION} - ${datePart}`;
}

export function buildSyncMeta() {
  return {
    appVersion: APP_VERSION,
    buildId: getBuildId(),
    syncedAt: new Date().toISOString(),
  };
}
