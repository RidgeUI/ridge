const path = require('path')
const fs = require('fs-extra')
const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const args = require('args')
const chalk = require('chalk')
const ridgeExternals = require('ridge-externals')
const { convertToCamelCase } = require('../src/utils.js')
const { promiseGlob, doCopyToNpm } = require('./utils.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommonBase = require('./webpack.common.js')
const webpackCompile = require('./webpackCompile.js')
const isVariableName = require('../src/isVariableName.js')

// 读取配置好的external目录
const externals = ridgeExternals.externals.reduce((acc, item) => {
  acc[item.module] = item.root
  return acc
}, {})

// const externals = {
//     'react': 'React',
//     'react-dom': 'ReactDOM',
//     'vue': 'Vue',
//     // 'highcharts': 'Highcharts',
//     // 'echarts': 'echarts',
//     'moment': 'moment',
//     'lodash': '_',
//     'axios': 'axios',
//     'antd': 'antd',
//     '@douyinfe/semi-ui': 'SemiUI',
//     '@ant-design/icons': 'icons'
// }
const log = console.log
const BUILD_PATH = 'build'

args.option('dir', 'The Front Component Project Root Path', './')
  .option('src', 'No Minimize')
  .option('store', 'Build Stores', true)
  .option('watch', 'Build with Watch')
  .option('port', 'Package Provider Host Port')
  .option('concat', 'Concat all components in one file', true)
  .option('external', 'Bundle with external libs')
  .option('config', 'Print Webpack Config')
  .option('react', 'create React component')
  .option('analyse', 'Start Bundle Analyse Service')

const flags = args.parse(process.argv)

/**
 * 打包npm模块中的所有图元
 * @param packagePath npm模块路径
 * @returns {Promise<void>}
 */
const build = async function (packagePath) {
  log(chalk.green('Component dir:', path.resolve(packagePath, './package.json')))

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

  const targetFiles = await promiseGlob(ridgeConfig.pattern || './src/**/*.d.js')
  if (targetFiles.length === 0) {
    log(chalk.green('No component found: ' + ridgeConfig.pattern || './src/**/*.d.js'))
  }

  log(chalk.green('Compiling Components:'))

  let entry = null
  let output = null
  if (ridgeConfig.concat || flags.concat) { // 文件打包到一起
    const imports = []
    const names = []
    for (let i = 0; i < targetFiles.length; i++) {
      const file = targetFiles[i]
      const componentName = path.dirname(file)

      const folderName = convertToCamelCase(path.basename(path.dirname(file)))

      if (!isVariableName(folderName)) {
        log(chalk.red(folderName + ' is not valid component name'))
      }
      log(chalk.green(folderName))
      imports.push(`import ${folderName} from '${file}'`)
      names.push(folderName)
    }
    let concatJsContent = ''
    if (ridgeConfig.bundleExternal || flags.bundleExternal) {
      if (packageJson.externals) {
        for (const external of packageJson.externals) {
          concatJsContent += `import './${external}'\n`
        }
      }
    }

    concatJsContent += `${imports.join('\n')}\n`
    concatJsContent += `export { ${names.join(', ')} }`

    fs.writeFileSync(path.resolve(packagePath, './concat.js'), concatJsContent)

    entry = './concat.js'

    output = {
      filename: 'ridge.dist.js',
      // filename: '[name].js',
      library: `${packageJson.name}`,
      // 代码输出格式，amd方式将依赖也输出到define上，未来在运行时需要针对amd加载做相关处理
      libraryTarget: 'this',
      // 如果代码中有import() 异步引入的部分，打包后会自动增加server地址前缀
      // publicPath: `${NPM_SERVER}/${packageJson.name}/${packageJson.version}/${BUILD_PATH}/`,
      publicPath: 'auto',
      // 编译输出到项目BUILD_PATH目录下
      path: path.resolve(packagePath, './' + BUILD_PATH)
    }
    packageJson.ridgeDist = BUILD_PATH + '/ridge.dist.js'
    delete packageJson.components
    fs.writeFileSync(path.resolve(packagePath, './package.json'), JSON.stringify(packageJson, null, 2))
  } else {
    entry = {}
    const elementPaths = []
    for (let i = 0; i < targetFiles.length; i++) {
      const file = targetFiles[i]
      log(chalk.green(file))
      // 以目录名称作为组件名称
      const componentName = path.basename(path.resolve(file, '../'))
      // const jsName = path.basename(path.resolve(file, '../')) + '-' + path.basename(file, '.js')
      elementPaths.push(componentName)
      entry[componentName] = file
    }

    packageJson.components = elementPaths

    output = {
      filename: '[name].js',
      library: `${packageJson.name}/[name]`,
      // 代码输出格式，amd方式将依赖也输出到define上，未来在运行时需要针对amd加载做相关处理
      libraryTarget: 'this',
      // 如果代码中有import() 异步引入的部分，打包后会自动增加server地址前缀
      // publicPath: `${NPM_SERVER}/${packageJson.name}/${packageJson.version}/${BUILD_PATH}/`,
      publicPath: 'auto',
      // 编译输出到项目BUILD_PATH目录下
      path: path.resolve(packagePath, './' + BUILD_PATH)
    }
    delete packageJson.ridgeDist
    fs.writeFileSync(path.resolve(packagePath, './package.json'), JSON.stringify(packageJson, null, 2))
  }

  // 这里依赖到 ridge-externals， 这就需要编译前端组件的项目能随时更新到最新的external配置。
  // 另外的办法是在此获取web api的配置，但是缺点是无版本追踪
  // for (const external of webpackExternals.externals) {
  //     externals[external.module] = external.root || external.module;
  // }

  const argsConfig = { plugins: [] }

  if (flags.analyse) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    argsConfig.plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }))
  }
  // 不压缩代码
  if (flags.src) {
    argsConfig.mode = 'development'
    argsConfig.devtool = 'eval-source-map'

    argsConfig.optimization = {
      // We no not want to minimize our code.
      minimize: false
    }
  } else {
    argsConfig.mode = 'production'
  }

  webpackCompile(
    merge({
      entry,
      output,
      externals,
      plugins: [
        new CleanWebpackPlugin()
      ]
    }, webpackCommonBase, argsConfig, ridgeConfig.configureWebpack || {}), flags.watch, () => {
      doCopyToNpm(packagePath, ridgeConfig)
    })
}

if (flags.react) {
  const targetDir = path.resolve(flags.dir, './src/' + flags.react)

  if (!isVariableName(flags.react)) {
    log(chalk.red('Invalide component name', flags.react))
  }

  if (fs.existsSync(targetDir)) {
    log(chalk.red('Target exist:', targetDir))
  }

  fs.ensureDirSync(targetDir)
  fs.copyFileSync(path.resolve(__dirname, '../src/template/react/index.d.js'), path.resolve(targetDir, 'index.d.js'))
  fs.copyFileSync(path.resolve(__dirname, '../src/template/react/Component.jsx'), path.resolve(targetDir, 'Component.jsx'))

  if (fs.existsSync(targetDir)) {
    log(chalk.green('Ridge Component Created:', targetDir))
  }
} else {
  build(flags.dir)
}
