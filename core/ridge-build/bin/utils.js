const glob = require('glob')
const path = require('path')
const fs = require('fs-extra')

const promiseGlob = async (pattern, opts) => {
  return new Promise((resolve, reject) => {
    glob(pattern, opts, (er, files) => {
      if (er) {
        reject(er)
      } else {
        resolve(files)
      }
    })
  })
}

const sleep = async mill => {
  return new Promise(resolve => {
    setTimeout(resolve, mill)
  })
}

/**
 * 根据ridgeConfig 执行后续复制相关工作
 * @param {*} packagePath
 * @param {*} ridgeConfig
 */
const doCopyToNpm = async (packagePath, ridgeConfig) => {
  const packageJson = require(path.resolve(packagePath, './package.json'))
  let copied = false
  while (!copied) {
    try {
      // 定义localNpm则直接复制安装过去
      if (ridgeConfig && ridgeConfig.localNpmDir) {
        fs.removeSync(path.resolve(packagePath, ridgeConfig.localNpmDir, packageJson.name))
        if (packageJson.files && Array.isArray(packageJson.files)) {
          for (const dir of [...packageJson.files, 'package.json']) {
            fs.copySync(path.resolve(packagePath, dir), path.resolve(packagePath, ridgeConfig.localNpmDir, packageJson.name, dir))
          }
        } else {
          fs.copySync(packagePath, path.resolve(packagePath, ridgeConfig.localNpmDir, packageJson.name))
        }
      }
      copied = true
    } catch (e) {
      console.error('copy fail', e)
    }
    await sleep(500)
  }
}

module.exports = {
  promiseGlob,
  doCopyToNpm,
  sleep
}
