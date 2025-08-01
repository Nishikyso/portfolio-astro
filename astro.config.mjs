// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    host: '0.0.0.0', // escucha en todas las interfaces (localhost + IP local)
    port: 4321,      // Puerto de ejemplo
  }
});