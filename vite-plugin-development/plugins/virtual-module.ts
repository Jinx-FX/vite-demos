import { Plugin } from 'vite'

// 虚拟模块名称
const virtualFibModuleId = 'virtual:fib'
// Vite 中约定对于虚拟模块，解析后的路径需要加上`\0`前缀
const resolvedFibVirtualModuleId = '\0' + virtualFibModuleId

export default function virtualFibModulePlugin(): Plugin {
  let config: ResolvedConfig | null = null
  return {
    name: 'vite-plugin-virtual-module',
    resolveId(id) {
      if (id === virtualFibModuleId) {
        return resolvedFibVirtualModuleId
      }
    },
    load(id) {
      // 加载虚拟模块
      if (id === resolvedFibVirtualModuleId) {
        return 'export default function fib(n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }'
      }
    },
  }
}
