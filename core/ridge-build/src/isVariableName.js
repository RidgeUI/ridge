const isValidVariableName = (str) => {
  // 正则表达式匹配有效的变量名
  const regex = /^[a-zA-Z][a-zA-Z0-9_]*$/

  // JavaScript保留字列表
  const reservedWords = [
    'abstract', 'arguments', 'await', 'boolean', 'break', 'byte', 'case', 'catch',
    'char', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do',
    'double', 'else', 'enum', 'eval', 'export', 'extends', 'false', 'final',
    'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import',
    'in', 'instanceof', 'int', 'interface', 'let', 'long', 'native', 'new',
    'null', 'package', 'private', 'protected', 'public', 'return', 'short',
    'static', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws',
    'transient', 'true', 'try', 'typeof', 'var', 'void', 'volatile', 'while',
    'with', 'yield',
    // ES6+ 保留字
    'as', 'async', 'await', 'enum', 'implements', 'interface', 'package',
    'private', 'protected', 'public', 'static', 'yield',
    // 严格模式下的一些额外保留字
    'implements', 'interface', 'let', 'package', 'private', 'protected',
    'public', 'static', 'yield'
  ]

  // 首先检查命名规则
  if (!regex.test(str)) {
    return false
  }

  // 然后检查是否是保留字
  return !reservedWords.includes(str)
}

module.exports = isValidVariableName
