import fs from 'fs';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pathbase = '/demo';
// fallback rules;
const fallbackRules = [
  { pattern: '^/apps/main/(?!assets/).*', fallback: '/apps/main/index.html' }
];

export default defineConfig({
  base: '',
  publicDir: 'public',
  server: {
    host: '127.0.0.1',
    port: 3000,
    proxy: {
      "/api": 'http://localhost:5000/api'
    },
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
  plugins: [
    pathbasePlugin(pathbase),
    spaFallbackPlugin(),
    react(),
  ]
});

function spaFallbackPlugin() {
  let publicDir = 'public';
  const bypassRegex = /@vite|@react-refresh|\/src\/|\/node_modules\/|\.map$/;

  function spaFallbackMiddleware(req, res, next) {
    const baseURL =  (req.protocol || 'http') + '://' + req.headers.host + '/';
    const uri = new URL(req.url,baseURL);
    const pathname = uri.pathname;
    if (fs.existsSync(__dirname + pathname)
        || fs.existsSync(publicDir + pathname)
        || bypassRegex.test(pathname)
    ) {
      next();
      return;
    }
    for (const rule of fallbackRules) {
      const regex = new RegExp(rule.pattern);
      if (regex.test(req.url)) {
        let url = rule.fallback;
        if (uri.search) {
          url += uri.search;
        }
        console.log(`${pathname} change to: ${url}`);
        req.url = url;
        break;
      }
    }
    next();
  }

  return {
    name: 'spa-fallback',
    configureServer: (server) => {
      publicDir = server.config.publicDir;
      server.middlewares.use(spaFallbackMiddleware);
    },
    configurePreviewServer: (server) => {
      publicDir = server.config.publicDir;
      server.middlewares.use(spaFallbackMiddleware);
    },
  }
}

function pathbasePlugin(pathbase) {
  function pathbaseMiddleware(req, res, next) {
    if (req.url.startsWith(pathbase)) {
      req.url = req.url.substring(pathbase.length);
    }
    next();
  }
  return {
    name: 'pathbase',
    configureServer: server => {
      server.middlewares.use(pathbaseMiddleware);
    },
    configurePreviewServer: server => {
      server.middlewares.use(pathbaseMiddleware);
    },
  };
}
