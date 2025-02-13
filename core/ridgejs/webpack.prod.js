const { merge } = require('webpack-merge')
const config = require('./webpack.config.js')
const path = require('path')

module.exports = merge(config, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    usedExports: true
  }
})
