const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ "style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  mode: 'development',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    proxy: { // proxy URLs to backend development server
      '/accounts/**': {
        target: 'http://localhost:3000/',
        secure: false,
        changeOrigin: true
      },
      '/items/**': {
        target: 'http://localhost:3000/',
        secure: false,
        changeOrigin: true
      },
    },
    static: {
      directory: path.resolve(__dirname, '/client'),// boolean | string | array | object, static file location
      publicPath: '/dist'
    }, 
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    port: 8080,
    host: 'localhost'
    // ...
  },
  plugins: [ new HtmlWebpackPlugin( {  template: path.join(__dirname, './client/index.html')})],
}