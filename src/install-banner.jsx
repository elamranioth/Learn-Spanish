import React from 'react';
import { Download, X } from 'lucide-react';

export default function InstallBanner({ installReady, installMessage, onInstall, onDismiss }) {
  return (
    <div className="install-banner">
      <div className="resume-banner-text">
        <span className="resume-banner-label">Install Lexiora</span>
        <span className="resume-banner-title">
          {installReady ? 'Add the app to this device' : 'Add to Home Screen if your browser hides the icon'}
        </span>
        {installMessage && <span className="install-banner-message">{installMessage}</span>}
      </div>
      <div className="resume-banner-actions">
        <button className="resume-btn-primary install-btn-primary" onClick={onInstall}>
          <Download size={15} />
          Install
        </button>
        <button className="resume-btn-dismiss" onClick={onDismiss} aria-label="Dismiss install banner">
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
