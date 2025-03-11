import React, { useEffect, forwardRef, useImperativeHandle } from 'react'
import initEditor from '../init'
export default forwardRef(({
  text = '',
  type = 'javascript',
  theme = 'default',
  onChange
}, ref) => {
  const el = React.createRef(null)

  // 使用useImperativeHandle来定义暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    getCode: () => {
      if (el.current.editorComposite) {
        return el.current.editorComposite.state.doc.toString()
      }
    },
    isValid: () => {

    }
  }))

  useEffect(() => {
    initEditor(el.current, type, theme, text)
  })
  return (
    <div
      ref={el} style={{
        width: '100%',
        height: '100%'
      }}
    />
  )
})
