import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/joseph-musembi-portfolio/',
  plugins: [react()],
  // image transforms and compression for production builds
  plugins: [react(), imagetools(), viteCompression()],
  server: {
    port: 5173,
    open: true
  }
})
