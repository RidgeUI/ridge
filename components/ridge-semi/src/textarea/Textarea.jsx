import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { TextArea } from '@douyinfe/semi-ui'

export default forwardRef(({
  value,
  size = '',
  disabled,
  showClear,
  validateStatus,
  rows,
  maxCount,
  input,
  onChange,
  onBlur
}, ref) => {
  const [val, setVal] = useState(value)

  // 使用useImperativeHandle来定义暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    updateProps: ({ value }) => {
      setVal(value)
    }
  }))

  return (
    <TextArea
      size={size}
      validateStatus={validateStatus}
      value={val}
      maxCount={maxCount}
      disabled={disabled}
      rows={rows}
      onBlur={e => {
        onBlur && onBlur(e.target.value)
      }}
      showClear={showClear} onChange={val => {
        setVal(val)
        input && input(val)
        onChange && onChange(val)
      }}
    />
  )
})
