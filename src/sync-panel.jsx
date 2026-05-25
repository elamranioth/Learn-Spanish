import React from 'react';
import { CheckCircle2, Cloud, CloudOff, Link2, RefreshCw, Shield, UserRound, X } from 'lucide-react';

export default function SyncPanel({
  open,
  onClose,
  firebaseReady,
  firebaseConnected,
  firebaseAuthLabel,
  firebaseBusy,
  firebasePersistenceNote,
  firebaseConfigText,
  setFirebaseConfigText,
  saveFirebaseConfigText,
  signInFirebaseAnonymous,
  signInFirebaseGoogle,
  signOutFirebase,
  syncWithFirebase,
  firebaseLastSyncedAt,
  firebaseMessage,
  googleAccessToken,
  googleLastSyncedAt,
  googleBusy,
  googleClientId,
  setGoogleClientId,
  syncAdvancedOpen,
  setSyncAdvancedOpen,
  hasBundledGoogleClient,
  syncStats = [],
  saveGoogleClientId,
  signInGoogleDrive,
  syncWithGoogleDrive,
  syncMessage,
}) {
  if (!open) return null;

  const firebaseConfigured = Boolean(firebaseReady);
  const firebaseSignedIn = Boolean(firebaseConnected);
  const hasClientId = Boolean(String(googleClientId || '').trim());
  const connected = Boolean(googleAccessToken);
  const setupNeeded = !hasBundledGoogleClient && !hasClientId;

  return (
    <div className="sync-modal-overlay" role="dialog" aria-modal="true" aria-label="Device sync">
      <div className="sync-modal">
        <button className="sync-close" onClick={onClose} aria-label="Close sync">
          <X size={15} />
        </button>

        <div className="sync-kicker">Device Sync</div>
        <h2>Keep Lexiora with you</h2>
        <p>
          Realtime sync keeps Memoria, progress, settings, and study time aligned across your phone, tablet, Boox, and laptop.
        </p>

        <div className={`sync-status-pill ${firebaseSignedIn ? 'connected' : firebaseConfigured ? '' : 'needs-setup'}`}>
          {firebaseSignedIn ? (
            <>
              <CheckCircle2 size={16} />
              Firebase connected - realtime sync is on
            </>
          ) : firebaseConfigured ? (
            <>
              <Cloud size={16} />
              Firebase ready - sign in to start sync
            </>
          ) : (
            <>
              <CloudOff size={16} />
              Firebase setup needed once
            </>
          )}
          {firebaseAuthLabel && <small>Auth: {firebaseAuthLabel}</small>}
          {firebaseLastSyncedAt && <small>Last Firebase sync: {firebaseLastSyncedAt}</small>}
          {firebasePersistenceNote && <small>Offline cache: {firebasePersistenceNote}</small>}
        </div>

        {!firebaseConfigured && (
          <>
            <label className="sync-client-field">
              <span>Firebase Web Config (JSON)</span>
              <textarea
                value={firebaseConfigText}
                onChange={(event) => setFirebaseConfigText(event.target.value)}
                placeholder='{"apiKey":"...","projectId":"..."}'
              />
            </label>
            <p className="sync-help">
              Paste your Firebase web config from Project settings. Save once on this device.
            </p>
          </>
        )}

        <div className="sync-actions">
          {!firebaseConfigured && (
            <button onClick={saveFirebaseConfigText} disabled={firebaseBusy}>
              <Link2 size={15} />
              Save Firebase setup
            </button>
          )}
          <button className="sync-primary-action" onClick={signInFirebaseAnonymous} disabled={firebaseBusy || !firebaseConfigured}>
            <UserRound size={15} />
            {firebaseBusy ? 'Working...' : 'Anonymous sign in'}
          </button>
          <button onClick={signInFirebaseGoogle} disabled={firebaseBusy || !firebaseConfigured}>
            {firebaseBusy ? 'Working...' : 'Sign in with Google'}
          </button>
          <button onClick={syncWithFirebase} disabled={firebaseBusy || !firebaseSignedIn}>
            <RefreshCw size={15} />
            {firebaseBusy ? 'Syncing...' : 'Sync now'}
          </button>
          {firebaseSignedIn && (
            <button onClick={signOutFirebase} disabled={firebaseBusy}>
              Sign out
            </button>
          )}
        </div>

        <div className="sync-setup-note">
          <strong>Firestore path:</strong> <code>/users/&lt;uid&gt;/data/appState</code> for full app sync.
          Lesson progress and quiz attempts are also saved under each user.
        </div>
        {firebaseMessage && <div className="sync-message">{firebaseMessage}</div>}

        <div className="sync-divider" />

        <div className="sync-kicker">Legacy Backup (Optional)</div>

        <div className={`sync-status-pill ${connected ? 'connected' : setupNeeded ? 'needs-setup' : ''}`}>
          {connected ? (
            <>
              <CheckCircle2 size={16} />
              Google connected - auto-sync is on
            </>
          ) : setupNeeded ? (
            <>
              <Shield size={16} />
              Google setup needed once
            </>
          ) : (
            <>
              <Cloud size={16} />
              Ready to sign in with Google
            </>
          )}
          {googleLastSyncedAt && <small>Last sync: {googleLastSyncedAt}</small>}
        </div>

        <div className="sync-stats">
          {syncStats.map((item) => (
            <span key={item.label}>
              <strong>{item.value}</strong>
              {item.label}
            </span>
          ))}
        </div>

        {setupNeeded && (
          <div className="sync-setup-note">
            <strong>First setup:</strong> paste your Google OAuth Client ID once. After that, this becomes a normal
            Sign in and Sync button on this device.
          </div>
        )}

        {!hasBundledGoogleClient && (
          <button className="sync-advanced-toggle" onClick={() => setSyncAdvancedOpen((openNow) => !openNow)}>
            {syncAdvancedOpen || hasClientId ? 'Hide Google setup' : 'Google setup'}
          </button>
        )}

        {!hasBundledGoogleClient && (syncAdvancedOpen || hasClientId || setupNeeded) && (
          <>
            <label className="sync-client-field">
              <span>Google OAuth Client ID</span>
              <input
                value={googleClientId}
                onChange={(event) => setGoogleClientId(event.target.value)}
                placeholder="1234567890-abc.apps.googleusercontent.com"
              />
            </label>
            <p className="sync-help">
              Use a web OAuth client with this site URL as an allowed origin. Lexiora only asks for Drive app-data access.
            </p>
          </>
        )}

        <div className="sync-actions">
          {!hasBundledGoogleClient && hasClientId && (
            <button onClick={saveGoogleClientId}>Save setup</button>
          )}
          <button className="sync-primary-action" onClick={signInGoogleDrive} disabled={googleBusy || !hasClientId}>
            {googleBusy ? 'Working...' : connected ? 'Reconnect Google' : 'Sign in and sync'}
          </button>
          {connected && (
            <button onClick={() => syncWithGoogleDrive()} disabled={googleBusy || !hasClientId}>
              <RefreshCw size={15} />
              {googleBusy ? 'Syncing...' : 'Sync now'}
            </button>
          )}
        </div>

        {syncMessage && <div className="sync-message">{syncMessage}</div>}
      </div>
    </div>
  );
}
