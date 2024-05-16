import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import pathbasePlugin from './vite-plugin-pathbase';
import spaFallbackPlugin from './vite-plugin-spafallback';

const pathbase = '/demo';

// spa fallback rules;
const fallbackRules = [
  { pattern: /^\/apps\/\/(?!assets\/).*/, fallback: '/apps/main/index.html' },
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
    pathbasePlugin(pathbase),
    spaFallbackPlugin(fallbackRules),
    react()
  ]
});
