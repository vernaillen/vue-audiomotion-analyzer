import { URL, fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vitePluginVueAudiomotion from 'vite-plugin-vue-audiomotion'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  //  vitePluginVueAudiomotion()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    format: 'cjs',
  },
})
