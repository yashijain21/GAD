import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        parvinder: resolve(process.cwd(), 'doctors/dr-parvinder-singh-arora/index.html'),
        simrandeep: resolve(process.cwd(), 'doctors/dr-simrandeep-kaur/index.html')
      }
    }
  }
});
