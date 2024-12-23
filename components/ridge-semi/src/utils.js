// 将 { label, value, children } 形式数据 转为semi 树等结构
const mapOptionToTree = tree => {
  if (Array.isArray(tree)) {
    return tree.map(object => {
      const result = { ...object }

      if (Array.isArray(object.children)) {
        result.children = mapOptionToTree(object.children)
      }
      result.key = object.value

      return result
    })
  } else {
    console.warn('树数据类型错误： 要求Array')
    return []
  }
}

export { mapOptionToTree }
