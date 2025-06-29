import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // <-- novo plugin aqui

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()], // <-- adiciona svgr junto do react
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
