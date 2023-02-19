import { Plugin } from 'vite'
import * as fs from 'fs'
import * as resolve from 'resolve'

interface SvgrOptions {
  // svg 资源模块默认导出，url 或者组件
  defaultExport: 'url' | 'component'
}

export default function viteSvgrPlugin(options: SvgrOptions) {
  const { defaultExport = 'url' } = options
  return {
    name: 'vite-plugin-svgr',
    async transform(code, id) {
      // 转换逻辑: svg -> React 组件
    },
  }
}
