import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    vue2Jsx(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@ui": fileURLToPath(new URL('./packages', import.meta.url)),
      "@utils": fileURLToPath(new URL('./utils', import.meta.url)), 
      "@shared":fileURLToPath(new URL('./shared', import.meta.url)),
      "@style":fileURLToPath(new URL('./style', import.meta.url)), 
      "@com":fileURLToPath(new URL('./playground/components', import.meta.url))
    },
  }
})
