const path = require('path')
const webpack = require('webpack')
const isProduction = process.env.NODE_ENV === 'production'
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const vueLoaderConfig = require('./vue-loader.config')
const {VueLoaderPlugin} = require('vue-loader')
const isProd = process.env.NODE_ENV === 'production'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: '#cheap-module-source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: isProd
          ? ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: { minimize: true }
              },
              'sass-loader'
            ],
            fallback: 'vue-style-loader'
          })
          : ['vue-style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: isProd
    ? [
      new VueLoaderPlugin(),
      /*new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      }),*/
      new UglifyJsPlugin({
        /*test: /\.js($|\?)/i,
        parallel: true,
        sourceMap: true*/
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new ExtractTextPlugin({
        filename: 'common.[chunkhash].css'
      })
    ]
    : [
      new VueLoaderPlugin(),
      // new FriendlyErrorsPlugin()
    ]
}