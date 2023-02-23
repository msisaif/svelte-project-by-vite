import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'svelte',
  plugins: [svelte()],
  build: {
    emptyOutDir: true,
    outDir: '../../frontend-build-apps/svelte-frontend-build-app/public',
  },
})
