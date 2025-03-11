import React, { useState, forwardRef, useImperativeHandle } from 'react'
export default forwardRef(({
  value = '',
  size = '',
  placeholder,
  validState,
  classList = [],
  disabled,
  type,
  input
}, ref) => {
  const [val, setVal] = useState(value)

  // 使用useImperativeHandle来定义暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    updateProps: ({ value }) => {
      setVal(value)
    }
  }))

  let validName = ''
  if (validState === true) {
    validName = 'is-valid'
  } else if (validState === false) {
    validName = 'is-invalid'
  }
  return (
    <>
      <input
        style={{
          width: '100%'
        }}
        value={val}
        type={type}
        disabled={disabled}
        className={['form-control', validName, 'form-control-' + size, ...classList].join(' ')} placeholder={placeholder} onChange={e => {
          setVal(e.target.value)
          input && input(e.target.value)
        }}
      />
    </>
  )
})
