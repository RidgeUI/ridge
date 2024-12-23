const { merge } = require('webpack-merge')
const config = require('./webpack.config.js')
const path = require('path')

module.exports = merge(config, {
  mode: 'production',
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  devtool: false,
  optimization: {
    minimize: true,
    usedExports: true
  }
})
