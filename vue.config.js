const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


module.exports = {
  publicPath:'./',
  configureWebpack: {
     externals: {
       "BMap": "BMap"
     }
  }
}
