// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Vite dev-server settings (for accessing via public IP)
  server: {
    host: true,            // listen on 0.0.0.0 (accept external connections)
    port: 5173,
    strictPort: true,

    // Tell the browser the exact origin to use when loading modules/HMR
    origin: 'http://18.234.194.80:5173',

    // HMR websocket endpoint (same host/port)
    hmr: {
      host: '18.234.194.80',
      port: 5173,
      protocol: 'ws',
    },
  },

  // Vitest configuration (must be sibling to `server`)
  test: {
    environment: 'jsdom',                // DOM APIs for React tests
    globals: true,                       // expect/describe/it available globally
    setupFiles: ['./src/test/setup.js'], // load jest-dom, etc.
    css: true,                           // allow importing CSS in components
  },
})
