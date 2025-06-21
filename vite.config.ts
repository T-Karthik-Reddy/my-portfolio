import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Replace 'my-portfolio' with your GitHub repository name
  base: '/my-portfolio/', // <--- ADD THIS LINE
  plugins: [react()],
  server: {
    port: 3000,
  },
})