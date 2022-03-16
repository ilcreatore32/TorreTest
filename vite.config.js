import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/bio": {
        target: "https://torre.bio/api/bios",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/bio/, ""),
      },
    },
  },
  plugins: [react()],
});
