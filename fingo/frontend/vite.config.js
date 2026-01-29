import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Crucial for offline H5 in Luffa (using file:// protocol)
  build: {
    outDir: '../mini-program/static', // Build directly into the mini-program static folder
    emptyOutDir: true,
  }
})
