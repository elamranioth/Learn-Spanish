import { mergeAppPayloads, mergeSavedWords } from './sync-merge.js';

export const GOOGLE_CLIENT_ID_KEY = 'google-drive-client-id-v1';
const GOOGLE_DRIVE_SYNC_FILE = 'learn-spanish-sync.json';
const GOOGLE_DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive.appdata';

let googleIdentityPromise = null;

export function loadGoogleIdentityScript() {
  if (typeof window === 'undefined') return Promise.reject(new Error('No browser window'));
  if (window.google?.accounts?.oauth2) return Promise.resolve(window.google);
  if (!googleIdentityPromise) {
    googleIdentityPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve(window.google);
      script.onerror = () => reject(new Error('Could not load Google sign-in'));
      document.head.appendChild(script);
    });
  }
  return googleIdentityPromise;
}

export async function requestGoogleDriveToken(clientId, prompt = '') {
  const google = await loadGoogleIdentityScript();
  return new Promise((resolve, reject) => {
    const tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: GOOGLE_DRIVE_SCOPE,
      prompt,
      callback: (response) => {
        if (response?.access_token) resolve(response.access_token);
        else reject(new Error(response?.error || 'Google sign-in failed'));
      },
      error_callback: (error) => reject(new Error(error?.message || 'Google sign-in failed')),
    });
    tokenClient.requestAccessToken();
  });
}

async function googleDriveFetch(accessToken, url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(text || `Google Drive HTTP ${response.status}`);
  }
  return response;
}

export async function findGoogleSyncFile(accessToken) {
  const params = new URLSearchParams({
    spaces: 'appDataFolder',
    fields: 'files(id,name,modifiedTime)',
    q: `name='${GOOGLE_DRIVE_SYNC_FILE}' and trashed=false`,
  });
  const response = await googleDriveFetch(accessToken, `https://www.googleapis.com/drive/v3/files?${params}`);
  const data = await response.json();
  return (data.files || [])[0] || null;
}

export async function readGoogleSyncPayload(accessToken, fileId) {
  if (!fileId) return null;
  const response = await googleDriveFetch(accessToken, `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`);
  return response.json();
}

export async function writeGoogleSyncPayload(accessToken, payload, fileId = null) {
  const metadata = fileId ? {} : { name: GOOGLE_DRIVE_SYNC_FILE, parents: ['appDataFolder'] };
  const boundary = `learn-spanish-${Date.now()}`;
  const body = [
    `--${boundary}`,
    'Content-Type: application/json; charset=UTF-8',
    '',
    JSON.stringify(metadata),
    `--${boundary}`,
    'Content-Type: application/json; charset=UTF-8',
    '',
    JSON.stringify(payload),
    `--${boundary}--`,
  ].join('\r\n');
  const url = fileId
    ? `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart`
    : 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
  const method = fileId ? 'PATCH' : 'POST';
  await googleDriveFetch(accessToken, url, {
    method,
    headers: { 'Content-Type': `multipart/related; boundary=${boundary}` },
    body,
  });
}

export function mergeSyncPayloads(localPayload, remotePayload) {
  return mergeAppPayloads(localPayload, remotePayload);
}

export { mergeSavedWords };
