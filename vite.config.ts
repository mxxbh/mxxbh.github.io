import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'homepage.html'),
      },
    },
    outDir: 'pages/homepage',
  },
  server: {
    open: './homepage.html',
    port: 5500,
  }
});

