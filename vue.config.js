// 配置文件路径别名

// 与路径有关，需要引入path模块
const path = require('path')

// path模块中有join方法，用于拼接新路径
function resolve(dir){
    return path.join(__dirname,dir)
}

// ❓module.exports和exports区别/以下复杂的东西
module.exports = {
    lintOnSave: true,
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