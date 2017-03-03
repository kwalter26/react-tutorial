var path = require('path');
var webpack = require('webpack');

var SRC = path.resolve(__dirname, 'src/index.js');
var DIST = path.resolve(__dirname, 'dist/');
var ASSETS = path.resolve(DIST, 'assets');

module.exports = {
  entry: SRC,
  output: {
    path: ASSETS,
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  devServer: {
    inline: true,
    contentBase: DIST,
    host: '0.0.0.0',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader']
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }
    ]
  },plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ]
};
