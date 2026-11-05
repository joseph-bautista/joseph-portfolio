import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Never inline assets as data: URIs; the CSP only allows same-origin fonts/images.
  build: { assetsInlineLimit: 0, sourcemap: false },
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(import.meta.dirname, './src') } },
})
