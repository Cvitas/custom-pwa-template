const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue加载器
const baseConfig = require('./webpack.base.js')
const util = require('./util')

module.exports = function (env) {
  return webpackMerge(baseConfig(env), {
    mode: 'production',
    plugins: [
      new CleanWebpackPlugin (),
      new HTMLWebpackPlugin({
        title: 'WEB APP模板',
        template: util.resolve('template/index.html'),
        favicon: util.resolve('template/codyy.ico'),
        filename: 'index.html',
        hash: true,
        inject: true
      }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].css'
      }),
      new VueLoaderPlugin(),
      new webpack.HashedModuleIdsPlugin(),
    ],
    optimization: {
      minimizer: [
        new TerserJSPlugin({}), // 压缩js
        new OptimizeCSSAssetsPlugin({}) // 压缩css
      ],
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            test: 'vendor',
            name: 'vendor', // 使用 vendor 入口作为公共部分
            enforce: true
          }
        }
      }
    },
    target: 'web',
    devtool: 'cheap-module-source-map'
  })
}
