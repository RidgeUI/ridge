import { nanoid } from './string'

const cleanImports = sourceCode => {
  const importStatements = []
  let updatedSourceCode = sourceCode
  // 使用正则表达式匹配import语句，并捕获from后面的模块路径
  const importRegex = /import\s+.*?\s+from\s+(['"])(.*?)(['"])/gm
  // 执行替换操作，同时收集被处理的模块路径
  let match
  while ((match = importRegex.exec(sourceCode))) {
    const modulePath = match[2] // 捕获到的模块路径在match[2]中
    importStatements.push(modulePath) // 将模块路径添加到列表中
    // 替换import语句为空字符串
    updatedSourceCode = updatedSourceCode.replace(match[0], '')
  }

  return {
    sourceCode,
    updatedSourceCode,
    importStatements
  }
}

// 加载js为text，然后执行StoreModule加载
const fetchLoadJsModule = async url => {
  try {
    const fetched = await window.fetch(url)
    const jsContent = await fetched.text()

    return loadJsModule(jsContent)
  } catch (e) {
    return null
  }
}

/**
 * 加载JS-Store源代码，返回Store模块
 * @param {*} sourceCode
 * @returns
 */
const loadJsModule = async sourceCode => {
  const scriptEl = document.createElement('script')
  const jsGlobal = 'ridge-store-' + nanoid(10)
  // 去除import的部分
  const { updatedSourceCode, importStatements } = cleanImports(sourceCode)
  // scriptEl.textContent = updatedSourceCode.replace('export default', 'window["' + jsGlobal + '"]=')

  const textContent = `(function() {
    ${updatedSourceCode.replace('export default', 'window["' + jsGlobal + '"] =')}
  })()` //
  scriptEl.textContent = textContent

  return new Promise((resolve, reject) => {
    try {
      window.onerror = e => {
        try {
          document.head.removeChild(scriptEl)
          reject(e)
        } catch (e) {}
      }
      document.head.append(scriptEl)
      const module = window[jsGlobal]
      // module.parsedLines = parseSourceWithComments(file.textContent)

      module.jsContent = updatedSourceCode
      module.dependencies = importStatements

      if (module) {
        resolve(module)
      } else {
        reject(new Error('not'))
      }
    } catch (e) {
      reject(e)
    } finally {
      delete window[jsGlobal]
      window.onerror = null
      document.head.removeChild(scriptEl)
    }
  })
}

export {
  loadJsModule,
  fetchLoadJsModule
}
