import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    WindiCSS({
      config: {
        safelist: ['bg-blue-600', 'bg-blue-700', 'bg-yellow-600', 'bg-yellow-700', 'bg-red-600', 'bg-red-700'].join(' '),
      },
    }),
  ],
})
