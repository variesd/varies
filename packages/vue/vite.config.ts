import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(async (env) => {
  console.log(env.mode)

  return {
    resolve: {
      extensions: ['.tsx', '.vue', '.jsx', '.ts', '.js'],
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    build: {
      lib: {
        entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        formats: ['es', 'cjs', 'umd', 'iife'],
        name: 'Statistic',
        fileName: 'index'
      },
      rollupOptions: {
        external: ['vue', 'lodash'],
        output: {
          exports: 'named',
          globals: {
            vue: 'Vue'
          }
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      dts({
        include: ['./index.ts', './src/index.vue', './src/volar.d.ts'],
        beforeWriteFile(filePath, content) {
          return {
            filePath: filePath.replace('/dist/src/', '/dist/'),
            content
          }
        }
      })
    ]
  }
})
