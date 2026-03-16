//vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
   base: '/Portfolio-Ambinintsoa-Julio/',
   plugins: [react()],
   assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.webp', '**/*.svg'],
    build: {
    assetsDir: 'assets', 
    emptyOutDir: true, 
  }
})
 
 