import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Lesson scripts live in `content/` at the repository root, outside this
// package, so the dev server has to be allowed to read a level up. Routing is
// by hash, so the deployed base path never has to be configured.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    fs: { allow: ['..'] },
  },
})
