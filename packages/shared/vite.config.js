// @ts-check
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: true,
    cssCodeSplit: true,
    cssMinify: true,
    ssr: false,
    copyPublicDir: false,
    sourcemap: true,
    lib: {
      entry: {
        'index': './src/index.ts',
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      cssFileName: 'index',
    },
    rollupOptions: {
      external: [],
      output: {
        dir: './dist',
        globals: {
        },
      }
    }
  }
});
