import Server from "react-dom/server"

let Greet = () => <h1>Hello, juejin! by esbuild_demo_01</h1>
console.log(Server.renderToString(<Greet />))