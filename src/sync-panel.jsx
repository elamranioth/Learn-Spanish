import React from 'react';
import { CheckCircle2, Cloud, RefreshCw, Shield, X } from 'lucide-react';

export default function SyncPanel({
  open,
  onClose,
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
          Google Drive stores one private study file for Memoria, progress, settings, and study time across your phone,
          tablet, Boox, and laptop.
        </p>

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
