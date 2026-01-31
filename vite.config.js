import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,          // listen on 0.0.0.0 (external)
    port: 5173,
    strictPort: true,

    // Tell the browser the exact origin to use when loading modules/HMR
    origin: 'http://18.234.194.80:5173',

    // HMR websocket endpoint (same host/port)
    hmr: {
      host: '18.234.194.80',
      port: 5173,
      protocol: 'ws'
    }
  }
})
