function isObject (objValue) {
  return objValue && typeof objValue === 'object' && objValue.constructor === Object
}

const arrowFunctionCache = new Map()
function isArrowFunction (func) {
  if (arrowFunctionCache.has(func)) {
    return arrowFunctionCache.get(func)
  }
  const result = typeof func === 'function' && /^[^{]*=>/.test(func.toString())
  arrowFunctionCache.set(func, result)
  return result
}

export {
  isArrowFunction,
  isObject
}
