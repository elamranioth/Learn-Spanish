import React from 'react';
import { createRoot } from 'react-dom/client';
import './base.css';
import { registerServiceWorker } from './pwa.js';
import SpanishBook from './spanish-book.jsx';

function unlockPageScroll() {
  document.documentElement.style.minHeight = '100%';
  document.documentElement.style.overflowX = 'hidden';
  document.documentElement.style.overflowY = 'auto';
  document.body.style.minHeight = '100%';
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'auto';
}

if (typeof window !== 'undefined' && !window.storage) {
  window.storage = {
    async get(key) {
      const value = window.localStorage.getItem(key);
      return value === null ? null : { value };
    },
    async set(key, value) {
      window.localStorage.setItem(key, value);
    },
    async delete(key) {
      window.localStorage.removeItem(key);
    },
  };
}

if (typeof document !== 'undefined') {
  unlockPageScroll();
}

registerServiceWorker();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpanishBook />
  </React.StrictMode>
);
