import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { Input } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'

export default forwardRef(({
  value,
  size = '',
  disabled,
  icon,
  password,
  showClear,
  validateStatus,
  input
}, ref) => {
  const IconComponent = SemiIcons[icon]
  const [val, setVal] = useState(value)

  // 使用useImperativeHandle来定义暴露给父组件的方法
  useImperativeHandle(ref, () => (
    Object.assign({}, ref.current, {
      updateProps: ({ value }) => {
        setVal(value)
      }
    }))
  )
  return (
    <Input
      size={size}
      mode={password ? 'password' : ''}
      validateStatus={validateStatus}
      value={val}
      prefix={IconComponent ? <IconComponent /> : null}
      disabled={disabled}
      showClear={showClear} onChange={value => {
        setVal(value)
        input && input(value)
      }}
    />
  )
})
