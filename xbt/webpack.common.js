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

/*
    [
      'dist',         // removes 'dist' folder 文件夹
      'build/*.*',    // removes all files in 'build' folder
      'web/*.js'      // removes all JavaScript files in 'web' folder
    ]
 */

// the path(s) that should be cleaned
let pathsToClean = [
    'dist',
    'static'
]
/*
    {
      // Absolute path to your webpack root folder (paths appended to this)
      // Default: root of your package
      root: __dirname,

      // Write logs to console.
      verbose: true,

      // Use boolean "true" to test/emulate delete. (will not remove files).
      // Default: false - remove files
      dry: false,

      // If true, remove files on recompile.
      // Default: false
      watch: false,

      // Instead of removing whole path recursively,
      // 不是递归地删除整个路径
      // remove all path's content with exclusion of provided immediate children.
      // Good for not removing shared files from build directories.
      exclude: [ 'files', 'to', 'ignore' ],

      // allow the plugin to clean folders outside of the webpack root.
      // Default: false - don't allow clean folder outside of the webpack root
      allowExternal: false
    }
 */
// the clean options to use
let cleanOptions = {
    root:     '/static',
    // exclude:  ['*.html'],
    verbose:  true,
    dry:      false
}

module.exports = {
    entry: {
        index: './src/index.js',
        vendor: [
            'lodash'
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            /* webpack2
            {
                test: /\.css$/,
        -       loaders: [
        +       use: [
                   {
                     loader: "style-loader"
                   },
                   {
                     loader: "css-loader",
        -            query: {
        +            options: {
                        modules: true
                     }
                 ]
            },
            */

            /*
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-0']
                    }
                }
            },
            */
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



