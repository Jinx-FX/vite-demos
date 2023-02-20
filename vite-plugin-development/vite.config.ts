import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import virtual from './plugins/virtual-module'
import svgr from './plugins/svgr'
import inspect from 'vite-plugin-inspect'
import testHooks from './plugins/test-hooks'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // testHooks(),
    virtual(),
    svgr({ defaultExport: 'url' }),
    inspect(),
  ],
  build: {
    sourcemap: true,
    minify: false,
  },
})
