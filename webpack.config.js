const path = require('path');//当前路径
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清空打包目录的插件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html的插件
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin') //CSS文件单独提取出来

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

  //多入口文件
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
  resolve:{
        extensions: [".js",".css",".json"],
        alias: {} //配置别名可以加快webpack查找模块的速度
  },
  //模块：例如ES6编译,解读CSS,图片如何转换，压缩
  module:{
       rules:[
            {
                test: /\.js$/,
                 exclude: /node_modules/, 
                 loader: "babel-loader" //ES6
            },
            {
                test: /\.css$/,
                use: ExtractTextWebapckPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'] // 不再需要style-loader放到html文件内
                }),
                include: path.join(__dirname, 'src'), //限制范围，提高打包速度
                exclude: /node_modules/
            },
            {
                test:/\.less$/,
                use: ExtractTextWebapckPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                }),
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test:/\.scss$/,
                use: ExtractTextWebapckPlugin.extract({
                    fallback: 'style-loader',
                    use:['css-loader', 'postcss-loader', 'sass-loader']
                }),
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            { //file-loader 解决css等文件中引入图片路径的问题
            // url-loader 当图片较小的时候会把图片BASE64编码，大于limit参数的时候还是使用file-loader 进行拷贝
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                  loader: 'url-loader',
                  options: {
                    outputPath: 'images/', // 图片输出的路径
                    limit: 1 * 1024
                  }
                }
            },
            { //file-loader 解决css等文件中引入图片路径的问题
            // url-loader 当图片较小的时候会把图片BASE64编码，大于limit参数的时候还是使用file-loader 进行拷贝
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                  loader: 'url-loader',
                  options: {
                    outputPath: 'images/', // 图片输出的路径
                    limit: 1 * 1024
                  }
                }
            },
        ]
  },
  //插件，用于生产模版和各项功能
  plugins:[
    new CleanWebpackPlugin(['dist']), //传入数组,指定要删除的目录
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/greeter.html",
      filename: "./greeter.html",
    }),
    new ExtractTextWebapckPlugin('[name].css'),//ExtractTextWebapckPlugin
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

//一些问题:
//webpack-dev-server 服务器打包的后的文件并没有物理存在电脑上，只是在内存中, 所以不会生成dist 文件夹