import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// this should be good!
export default defineConfig({
  plugins: [react()],
  base: '/p191/',       
  build: {
    outDir: "docs"      
  }
})
