import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import taailwindcss from "@tailwindcss/vite"
import tailwindcss from '@tailwindcss/vite'






// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server : {port: 3000,}
})
