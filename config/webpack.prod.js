const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: 'source-map',
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            }
          }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
        //   filename: devMode ? '[name].css' : '[name].[hash].css',
        filename: '[name].[hash].css',
        //   chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
        chunkFilename: 'css/[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            filename: '../dist/index.html',
            template: 'index.html',
            inject: true
        })
    ],
    module: {
        rules: [
            {
                // test: /\.(sa|sc|c)ss$/,
                test: /\.css$/,
                use: [
                    // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    // 'sass-loader',
                ]
            }
        ]
    }
})
