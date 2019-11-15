const SWPreCacheWebpackPlugin = require('sw-precache-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')
const util = require('./util')

module.exports = function (env) {
  const cssBaseLoader = env === 'prod' ? [MiniCssExtractPlugin.loader] : [{ loader: 'style-loader' }]
  const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [util.resolve('src')],
    exclude: /node_modules/,
    options: {
      configFile: '.eslintrc.js',
      formatter: require('eslint-friendly-formatter'),
      emitWarning: (env === 'prod' && false) || true
    }
  })
  return {
    entry: {
      main: './src/main.js',
    },
    output: {
      path: util.resolve('dist'),
      publicPath: config.publicPath,
      filename: env === 'prod' ? 'static/js/[name].[contenthash:8].js' : 'static/js/[name].js',
      chunkFilename: env === 'prod' ? 'static/js/[name].[contenthash:8].js' : 'static/js/[name].js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': util.resolve('src')
      }
    },
    module: {
      rules: [
        { ...createLintingRule() },
        { test: /\.vue$/, use: [{ loader: 'vue-loader' }] },
        { test: /(\.js)$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
        { test: /\.css$/, use: [...cssBaseLoader, { loader: 'css-loader' }, 'postcss-loader'] },
        {
          test: /\.scss$/,
          use: [...cssBaseLoader, {
            loader: 'css-loader',
            options: { modules: false }
          }, 'sass-loader', 'postcss-loader']
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: [{
            loader: 'url-loader',
            options: { limit: 1000, name: 'static/imgs/[name].[hash:8].[ext]' }
          }]
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          use: [{
            loader: 'url-loader',
            options: { limit: 10000, name: 'static/fonts/[name].[hash:8].[ext]' }
          }]
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          use: [{
            loader: 'url-loader',
            options: { limit: 10000, name: 'static/media/[name].[hash:8].[ext]' }
          }]
        },
      ],
    },
    plugins: [
      new SWPreCacheWebpackPlugin({
          cacheId: 'PWA-APP',
          dontCacheBustUrlsMatching: /\.\w{8}\./,
          filename: 'service-worker.js',
          minify: true,
          navigateFallback: config.publicPath + 'index.html',
          staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
        }
      ),
    ]
  }
}
