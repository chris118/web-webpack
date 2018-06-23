//当前路径
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  //选择的模式告诉webpack使用其内置的优化
  // "production" | "development" | "none"
  mode : "development",

  devtool: 'eval-source-map',

  /*
  //入口文件
  entry: "./src/index.js",

  //出口文件的配置项
  output: {
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    path : path.resolve(__dirname,"dist"),

    //输出文件的名字
    filename : 'bundle.js',
  },
  */

  //入口文件
  entry:{
    index: './src/index.js',
    greeter: './src/greeter.js'
  },
  //出口文件的配置项
  output:{
    path:path.resolve(__dirname,'dist'),
    //filename前面我们可以使用一个变量[name],这个就表示获取entry里面的key作为文件名加在前面
    //打出来是index.js和index2.js
    filename:'[name].js'
  },

  //模块：例如ES6编译,解读CSS,图片如何转换，压缩
  module:{
       rules:[
            {
                test: /\.js$/,
                 exclude: /node_modules/, 
                 loader: "babel-loader"
            }
        ]
  },
  //插件，用于生产模版和各项功能
  plugins:[
    //new CleanWebpackPlugin(['dist']), //传入数组,指定要删除的目录

    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/greeter.html",
      filename: "./greeter.html",
    }),
  ],

  //配置webpack开发服务功能
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