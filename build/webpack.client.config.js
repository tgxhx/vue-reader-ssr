const fs = require('fs')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const isProd = process.env.NODE_ENV === 'production'
const package = require('../package.json')

module.exports = merge(baseConfig, {
  entry: {
    app: './src/entry-client.js',
    // vendor: Object.keys(package.dependencies)
  },
  output: {
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: '/reader-ssr/',
  },
  plugins: isProd ? [
    // strip dev-only code in Vue source
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    // 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
    // 以便可以在之后正确注入异步 chunk。
    // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.[chunkhash] .js',
      minChunks: function (module) {
        // a module is extracted into the vendor chunk if...
        return (
          // it's inside node_modules
          /node_modules/.test(module.context) &&
          // and not a CSS file (due to extract-text-webpack-plugin limitation)
          !/\.css$/.test(module.request)
        )
      }
    }),
    // extract webpack runtime & manifest to avoid vendor chunk hash changing
    // on every build.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    // 此插件在输出目录中
    // 生成 `vue-ssr-client-manifest.json`。
    new VueSSRClientPlugin()
  ] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new VueSSRClientPlugin()
  ]
})