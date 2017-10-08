const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// we still need to drop it from the bundle
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
var config  = {
    //此处指明路口文件位置
    //entry: './main.js',

    entry: {
        main: './main.js'  ,   //设置入口文件\
        vendor: [
            'lodash'
        ]
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

        // historyApiFallback: true, //不跳转
        contentBase: './dist',
        hot: true,
        inline:true,
        port:7700

    },
    // resolve:影响对模块的解析，一个对象
    // extensions：自动补全识别后缀，是一个数组

    plugins: [// 定义插件，一个数组
        // new UglifyJSPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    //定义了对模块的处理逻辑，这里可以用loaders定义一系列的加载器，以及一些正则，
    //当需要加载的文件匹配test的正则时，会调用后面的loader对文件进行处理，
    //所以这就是webpack骚的可怕的地方。。。。。
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式
                exclude: /(node_modules|bower_components)/,
                use: [　　 //使用到的loader及其配置
                    {
                        loader: 'babel-loader', // 使用的加载器名称，-loader后缀不能省略
                        options: { // 为当前loader设置的参数，对于babel可以提取出单独放在.babelrc文件中;
                            presets: ['env', 'react', 'stage-0']

                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;


