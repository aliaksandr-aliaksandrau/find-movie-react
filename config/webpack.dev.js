const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './../dev'),
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, './../dev'),
    compress: true,
    port: 4500,
    open: true
  },
});
