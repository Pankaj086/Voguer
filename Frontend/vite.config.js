import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})


// { name: "Luxury Rose Gold", colors: ["#FAE1DD", "#3B2C35", "#E6A4B4", "#D291BC", "#FFC2A1", "#AD6A6C" , "#FADCD9"] }, 