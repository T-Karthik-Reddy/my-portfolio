import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: specify a port
  },
  // Ensure publicDir is 'public' by default, or specify if different
  // publicDir: 'public', 
})