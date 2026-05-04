import React from 'react';
import { createRoot } from 'react-dom/client';
import './base.css';
import { registerServiceWorker } from './pwa.js';
import SpanishBook from './spanish-book.jsx';

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

registerServiceWorker();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpanishBook />
  </React.StrictMode>
);
