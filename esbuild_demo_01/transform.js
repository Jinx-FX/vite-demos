// 单文件转译——Transform API

// Transform API，与 Build API 类似，它也包含了同步和异步的两个方法，
// 分别是transformSync和transform。

const { transform, transformSync } = require("esbuild")

async function runTransform () {
  // 第一个参数是代码字符串，第二个参数为编译配置
  const content = await transform(
    "const isNull = (str: string): boolean => str.length > 0;",
    {
      sourcemap: true,
      loader: "tsx",
    }
  )
  console.log(content)
}

runTransform()