const path = require('path')
const webpack = require('webpack')
const fs = require('fs-extra')
const glob = require('glob')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const webpackCommonBase = require('./webpack.common.js')
const args = require('args')
const chalk = require('chalk')
const ridgeExternals = require('ridge-externals')
const { convertToCamelCase } = require('../src/utils.js')
const isVariableName = require('../src/isVariableName.js')
const { promiseGlob } = require('./utils.js')
const webpackCompile = require('./webpackCompile.js')
const log = console.log

const buildStore = async (packagePath, watch, finished) => {
  const packageJson = require(path.resolve(packagePath, './package.json'))

  let ridgeConfig = {}
  if (fs.existsSync(path.resolve(packagePath, './ridge.config.js'))) {
    try {
      ridgeConfig = require(path.resolve(packagePath, './ridge.config.js'))
      log(chalk.green('Ridge config: ' + path.resolve(packagePath, './ridge.config.js')))
    } catch (e) {
      log(chalk.green('Ridge Config File Error (Ignored)' + path.resolve(packagePath, './ridge.config.js')))
    }
  }

  const storeFiles = await promiseGlob(ridgeConfig.storePattern || './src/**/*.store.js')

  const entry = {}

  for (const storeFile of storeFiles) {
    entry[storeFile] = storeFile
  }

  output = {
    filename:  'ridge.dist.js',
    // filename: '[name].js',
    library: `${packageJson.name}`,
    // 代码输出格式，amd方式将依赖也输出到define上，未来在运行时需要针对amd加载做相关处理
    libraryTarget: 'this',
    // 如果代码中有import() 异步引入的部分，打包后会自动增加server地址前缀
    // publicPath: `${NPM_SERVER}/${packageJson.name}/${packageJson.version}/${BUILD_PATH}/`,
    publicPath: 'auto',
    // 编译输出到项目BUILD_PATH目录下
    path: path.resolve(packagePath, './build-store')
}
packageJson.ridgeDist = BUILD_PATH + '/ridge.dist.js'
delete packageJson.components
fs.writeFileSync(path.resolve(packagePath, './package.json'), JSON.stringify(packageJson, null, 2))

  webpackCompile(merge({
    entry
  }), watch, finished)
}

module.exports = buildStore
