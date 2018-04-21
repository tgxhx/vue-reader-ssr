const path = require('path')
const webpack = require('webpack')
const isProduction = process.env.NODE_ENV === 'production'
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const vueLoaderConfig = require('./vue-loader.config')
const {VueLoaderPlugin} = require('vue-loader')
const isProd = process.env.NODE_ENV === 'production'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const resolve = (dir) => path.join(__dirname, '..', dir)

module.exports = {
  devtool: '#cheap-module-source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCss: true
        }
        /*options: Object.assign({}, vueLoaderConfig, {
          extractCSS: true
        })*/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.s?css$/,
        use: isProd
          ? ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {minimize: true}
              },
              'sass-loader'
            ],
            fallback: 'vue-style-loader'
          })
          : ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: isProd
          ? ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {minimize: true}
              },
              'less-loader'
            ],
            fallback: 'vue-style-loader'
          })
          : ['vue-style-loader', 'css-loader', 'less-loader']
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
        test: /\.js($|\?)/i,
        parallel: true,
        sourceMap: true
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new ExtractTextPlugin({
        filename: 'css/[name].[chunkhash].css'
      })
    ]
    : [
      new VueLoaderPlugin(),
      // new FriendlyErrorsPlugin()
    ]
}