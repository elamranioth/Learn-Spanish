import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Learn-Spanish/',
  plugins: [react()],
  define: {
    __APP_BUILD_ID__: JSON.stringify(process.env.VITE_APP_VERSION || new Date().toISOString()),
  },
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'react';
          if (id.includes('node_modules/lucide-react')) return 'icons';
          if (id.includes('spanish-expressions-library')) return 'expressions-library';
          if (id.includes('tiempos-verbales')) return 'tiempos-verbales';
          if (id.includes('compound-tenses-')) return 'compound-tenses';
          if (id.includes('canciones')) return 'canciones';
          return undefined;
        },
      },
    },
  },
});
