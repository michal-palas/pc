import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` is '/' for local dev and previews. In CI (GitHub Pages project
// sites), the deploy workflow sets VITE_BASE to '/<repo>/' so asset URLs
// resolve under the repo subpath.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
