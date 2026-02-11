import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// tailwindcss installation
import tailwindcss from '@tailwindcss/vite'
// shadcn installation
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
