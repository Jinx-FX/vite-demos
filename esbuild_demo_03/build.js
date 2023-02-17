const { build } = require("esbuild")
const html = require("./html-plugin")

// esbuild 配置
async function runBuild () {
  build({
    absWorkingDir: process.cwd(),
    entryPoints: ["./src/index.jsx"],
    outdir: "dist",
    bundle: true,
    format: "esm",
    splitting: true,
    sourcemap: true,
    metafile: true,
    plugins: [html()],
  }).then(() => {
    console.log("🚀 Build Finished!")
  })
}

runBuild()