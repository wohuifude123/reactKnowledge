/**
 *  Author: Abbott.liu
 *  Description: Created by Abbott.liu on 2017/10/5.
 *
 *  功能：webpack 公有配置
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');// 热加载需要的 webpack
let ExtractTextPlugin = require("extract-text-webpack-plugin");

// the path(s) that should be cleaned
let pathsToClean = [
    'dist',
    'static'
]

// the clean options to use
let cleanOptions = {
    root:     '/static',
    // exclude:  ['*.html'],
    verbose:  true,
    dry:      false
}

let config = {
    /*
    entry: {
        index: './src/index.js',
        vendor: [
            'lodash'
        ]
    },
    */
    entry: {},
    // Rule.loader is a shortcut to Rule.use: [ { loader } ]
    // Rule.options and Rule.query are shortcuts to Rule.use: [ { options } ]
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            { // 解析less文件，把less解析成浏览器可以识别的css语言
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    'react-hot-loader', // react 热替换
                    'babel-loader' // .babelrc 具体配置文件
                ]
            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['env', 'react', 'stage-0']
                }
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['static']),
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new webpack.HotModuleReplacementPlugin(), // 热加载的插件，使用缓存时请注释
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new ExtractTextPlugin({
            filename: 'styles/[name].css'
        }),
        new webpack.ProvidePlugin({ // 将 $ 变量挂载到 window 下面，可以在项目中直接使用 $ 不用再引用
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ],
    // 通过 output.filename 和 output.path 属性，来告诉 webpack bundle（捆）的名称，以及我们想要生成（emit）到哪里
    output: {
        filename: '[name].bundle.js',
        // filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'static')
    },
    externals: {

    }
};


// 页面入口处理

let entry = {
    index: './src/index.js',
    vendor: [
        'jquery',
        'lodash'
    ]
};

config.entry = entry;

module.exports = config;
