const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue加载器
const baseConfig = require('./webpack.base.js')
const config = require('./config')
const util = require('./util')
const port = config.port

module.exports = function (env) {
  console.log(`
#################################################
  Server is listening at: http://localhost:${port}
#################################################
`)
  return webpackMerge(baseConfig(env), {
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'WEB APP模板',
        template: util.resolve('template/index.html'),
        favicon: util.resolve('template/codyy.ico'),
        filename: 'index.html',
        hash: true,
        inject: true,
      }),
      new VueLoaderPlugin(),
      new webpack.HashedModuleIdsPlugin()
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    devServer: {
      hot: true,
      open: false,
      host: '0.0.0.0',
      port: port,
      https: false,
      publicPath: config.publicPath,
      // proxy: [ { // proxy URLs to backend development server
      //   context: [ "/rms" ],
      //   target: "http://10.5.223.244:8080",
      // } ],
      historyApiFallback: true
    },
    devtool: 'eval-source-map',
    target: 'web'
  })
}
