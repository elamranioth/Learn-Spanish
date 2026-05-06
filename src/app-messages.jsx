import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export function showAppMessage(message, options = {}) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('learn-spanish-message', {
    detail: {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      title: options.title || 'Notice',
      message,
      tone: options.tone || 'info',
      timeout: options.timeout || 5200,
    },
  }));
}

export function AppMessages() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function handleMessage(event) {
      const detail = event.detail || {};
      if (!detail.message) return;
      setItems((prev) => [detail, ...prev].slice(0, 3));
      if (detail.timeout !== Infinity) {
        window.setTimeout(() => {
          setItems((prev) => prev.filter((item) => item.id !== detail.id));
        }, detail.timeout || 5200);
      }
    }

    window.addEventListener('learn-spanish-message', handleMessage);
    return () => window.removeEventListener('learn-spanish-message', handleMessage);
  }, []);

  if (!items.length) return null;

  return (
    <div className="app-message-stack" aria-live="polite" aria-atomic="false">
      {items.map((item) => (
        <div key={item.id} className={`app-message app-message-${item.tone || 'info'}`}>
          <div>
            <span className="app-message-title">{item.title}</span>
            <p>{item.message}</p>
          </div>
          <button
            type="button"
            className="app-message-close"
            onClick={() => setItems((prev) => prev.filter((x) => x.id !== item.id))}
            aria-label="Dismiss message"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
