function convertToCamelCase (str) {
  // 使用正则表达式匹配所有的'-'和后面的字符，并使用函数替换它们
  // 在替换函数中，将'-'后面的字符转为大写
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase()
  })
}

module.exports = {
  convertToCamelCase
}
