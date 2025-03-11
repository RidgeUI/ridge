// 设置上浮类，返回是否设置成功
const setPseudoClassList = (el, pseudo, isRemove) => {
  const classList = el.classList
  let isHoverable = false
  for (let i = 0; i < classList.length; i++) {
    if (classList[i].startsWith(pseudo + ':')) {
      isHoverable = true
      const content = classList[i].substring(pseudo.length + 1) // 提取 hover: 后面的内容
      if (isRemove) {
        el.classList.remove(content)
      } else {
        el.classList.add(content)
      }
    }
  }
  return isHoverable
}

const forceDOMElementState = (el, pseudo, isRemove) => {
  const pseudoEls = el.querySelectorAll('.has-pseudo-' + pseudo)
  for (const pseudoEl of pseudoEls) {
    if (pseudoEl.closest('.ridge-element') === el) {
      setPseudoClassList(pseudoEl, pseudo, isRemove)
    }
  }
}

// 提取重复逻辑到一个独立的函数
const handlePseudoClass = (className, pseudos) => {
  const [pseudo, actualName] = className.split(':')
  if (actualName) {
    pseudos.push(pseudo)
  }
  return className
}

export {
  setPseudoClassList,
  forceDOMElementState,
  handlePseudoClass
}
