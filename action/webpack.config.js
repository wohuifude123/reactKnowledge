const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config  = {
    //此处指明路口文件位置
    //entry: './main.js',
    entry: {
        main: './index.js'  ,   //设置入口文件\
    },

    // 配置打包结果，
    // path配置定义了输出的文件位置
    // filename则定义了打包结果文件的名称
    devtool: 'inline-source-map',
    output: {//输出目录
        //filename: 'bundle.js',//设置导出文件为index.js
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')//打包后的js文件存放的地方
    },
    //设置本地服务器端口号为9001，此端口可以自己设定，但记住不能与其他服务端口重复
    devServer:{
        // 默认webpack-dev-server会为根文件夹提供本地服务器
        // 如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
        // contentBase: './dist',//tell the dev server where to look for files
        hot: true,
        inline:true,
        historyApiFallback: true, //不跳转
        port:7700

    },
    // resolve:影响对模块的解析，一个对象
        // extensions：自动补全识别后缀，是一个数组

    plugins: [// 定义插件，一个数组
        // new UglifyJSPlugin(),
        // new webpack.HotModuleReplacementPlugin() //,
        /*
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
        */
        /*
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
        })
        */
    ],
    //定义了对模块的处理逻辑，这里可以用loaders定义一系列的加载器，以及一些正则，
    //当需要加载的文件匹配test的正则时，会调用后面的loader对文件进行处理，
    //所以这就是webpack骚的可怕的地方。。。。。
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    'babel-loader' // .babelrc 具体配置文件
                ]
            }
        ]

    }
};

module.exports = config;


