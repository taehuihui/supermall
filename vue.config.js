/**
 * vue.config.js打包的配置
 * vue-cli4默认是没有的
 */
// 配置文件路径别名

// 与路径有关，需要引入path模块
const path = require('path')

// path模块中有join方法，用于拼接新路径
function resolve(dir){
    return path.join(__dirname,dir)
}

//引入该插件
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  // 公共路径(必须有的)
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    
  // 输出文件目录
  outputDir: "dist",
  lintOnSave:false,
  // 我用的only，打包后小些
  runtimeCompiler: false,
  productionSourceMap: false, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
  configureWebpack: {
    plugins: [
        new CompressionWebpackPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            test: new RegExp('.(' + ['js', 'css'].join('|') + ')$'),
            threshold: 10240,
            deleteOriginalAssets: false
        })
    ]
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('network', resolve('src/network'))
      .set('store', resolve('src/store'))
      .set('config', resolve('src/config'))
  }
}