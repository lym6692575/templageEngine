const path = require('path')

module.exports = {
  // 模式
  mode: 'development',
  // 入口文件
  entry: './src/index.js',
  // 打包到什么文件
  output: {
    filename: 'bundle.js',
  },
  // 配置一下webpack-dev-server
  devServer: {
    // 静态文件根目录
    contentBase: path.join(__dirname, 'www'),
    // 不压缩
    compress: false,
    port: 8880,
    // 虚拟打包路径，bundle.js文件没有真正的生成
    publicPath: '/xuni/',
  },
}
