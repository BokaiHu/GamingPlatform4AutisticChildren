import { fileURLToPath, URL } from 'node:url'
import legacy from '@vitejs/plugin-legacy'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
			targets: ['defaults', 'not IE 11']
		})
  ],
  assetsDir: 'assets',
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
