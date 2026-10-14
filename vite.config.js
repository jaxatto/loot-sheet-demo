import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/loot-sheet-demo/',
  build: {
    // The item data (loot.json) is its own chunk (see loadItems in
    // src/admin/useAdmin.js) and is by far the biggest file. Only warn if it
    // grows well past its current size.
    chunkSizeWarningLimit: 800,
  },
});
