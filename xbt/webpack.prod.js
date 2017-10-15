/**
 *  Author: Abbott.liu
 *  Description: Created by Abbott.liu on 2017/10/5.
 *
 *  功能：webpack 生产环境
 */
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
});
