/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})*/

module.exports = {
  devServer: {
    proxy: {
      "^/farmacia": {
        target: "https://farmanet.minsal.cl",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/farmacia": "/" }
      }
    }
  }
}
