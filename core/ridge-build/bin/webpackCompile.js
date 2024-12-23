const webpack = require('webpack')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')

const compile = (webpackConfig, watch, finished) => {
  // 创建webpack 编译器  这里使用webpack api方式进行编译
  const compiler = webpack(webpackConfig)
  // 引用 ProgressPlugin 打印编译过程进度详情
  // eslint-disable-next-line no-shadow-restricted-names
  const progressPlugin = new ProgressPlugin(function (percentage, msg, ...args) {
    let info = args ? args.join(' ') : ''

    if (msg === 'building modules' && args[2]) {
      const splits = args[2].split('!')

      info = splits[splits.length - 1]
    }
    console.log(Math.floor(percentage * 100) + '%', msg, info)
  })

  progressPlugin.apply(compiler)

  if (watch) {
    compiler.watch({
      aggregateTimeout: 300,
      ignored: /package.json/
    }, (err, stats) => {
      if (err) {
        console.error('Build Error', err)
      }
      const info = stats.toJson()

      if (stats.hasErrors()) {
        console.error(info.errors)
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings)
      }

      setTimeout(async () => {
        // 打印编译结果及编译异常
        process.stdout.write(stats.toString({
          colors: true,
          modules: true,
          children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
          chunks: false,
          chunkModules: true
        }) + '\n\n')
        console.log('  Build Complete.\n')

        finished && finished(info)
        // doCopyToNpm(packagePath, ridgeConfig)
      }, 100)
    })
  } else {
    compiler.run((err, stats) => {
      if (err) {
        console.error('Build Error', err)
        return
      }
      // 打印编译结果及编译异常
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: true
      }) + '\n\n')
      if (stats.hasErrors()) {
        console.log('  Build failed with errors.\n')
        process.exit(1)
      }
      console.log('Build complete.\n')
      finished && finished(stats)
    //   doCopyToNpm(packagePath, ridgeConfig)
    //   try {
    //     if (fs.existsSync(path.resolve(packagePath, './concat.js'))) {
    //       fs.unlinkSync(path.resolve(packagePath, './concat.js'))
    //     }
    //   } catch (e) {}
    })
  }
}

module.exports = compile
