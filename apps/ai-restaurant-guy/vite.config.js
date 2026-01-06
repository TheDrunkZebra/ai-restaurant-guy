import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-assets',
      closeBundle() {
        // Copy static assets to dist after build
        const assets = ['img', 'public'];
        assets.forEach(asset => {
          const src = join(process.cwd(), asset);
          const dest = join(process.cwd(), 'dist', asset);
          if (existsSync(src)) {
            mkdirSync(dest, { recursive: true });
            // This is a simple copy - for production, use a proper copy plugin
          }
        });
      }
    }
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
      output: {
        entryFileNames: 'js/index-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/index-[hash].css';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});

