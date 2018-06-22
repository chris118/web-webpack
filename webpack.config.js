//当前路径
const path = require('path');

module.exports = {
  //选择的模式告诉webpack使用其内置的优化
  // "production" | "development" | "none"
  mode : "development",

  devtool: 'eval-source-map',

  //入口文件
  entry: "./src/index.js",

  //webpakc如何输出的目标路径
  output: {
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    path : path.resolve(__dirname,"dist"),

    //输出文件的名字
    filename : 'bundle.js',
  },
  devServer: {
    // 设置服务器访问的基本目录
    contentBase:path.resolve(__dirname,'dist'), //最好设置成绝对路径
    // 设置服务器的ip地址,可以是localhost
    host:'localhost',
    // 设置端口
    port:8090,
    // 设置自动拉起浏览器
    open:true
  }
}