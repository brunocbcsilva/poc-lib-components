import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ customElement: true }),
    VueDevTools()
  ],
  define: {
    'process.env': process.env
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'ComercLib',
      fileName: 'comerc-lib'
    },
    sourcemap: true,
    target: 'esnext',
    minify: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
