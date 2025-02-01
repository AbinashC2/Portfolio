import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ContactMe from "@/components/ContactMe"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
