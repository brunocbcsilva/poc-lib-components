import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['cm-chat-card'].includes(tag)
        }
      }
    }),
    VueDevTools()
  ],
  define: {
    'process.env': process.env
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'ComercLib',
      formats: ['es', 'umd', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    sourcemap: true,
    target: 'esnext',
    minify: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
