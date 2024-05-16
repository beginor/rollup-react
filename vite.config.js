import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pathbase = '/demo';
import spaFallbackPlugin from './vite-plugin-spafallback';

// spa fallback rules;
const fallbackRules = [
  { pattern: /\/(?!assets\/).*/, fallback: '/index.html' },
];

export default defineConfig({
  base: '',
  publicDir: 'public',
  server: {
    host: '127.0.0.1',
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000/api'
    },
  },
  resolve: {
    alias: [
      { find: pathbase, replacement: '' }
    ]
  },
  build: {
    lib: false,
    manifest: false,
    rollupOptions: {
      input: {
        'main': 'apps/main/index.html'
      }
    }
  },
  esbuild: {
    legalComments: 'none'
  },
  plugins: [
    spaFallbackPlugin(fallbackRules),
  ]
});
