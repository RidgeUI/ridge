import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { AutoComplete } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'

export default forwardRef(({
  value,
  data,
  size,
  icon,
  input,
  onChange,
  placeholder
}, ref) => {
  const IconComponent = SemiIcons[icon]
  console.log('icon', icon, SemiIcons, SemiIcons[icon])

  const [val, setVal] = useState(value)

  // 使用useImperativeHandle来定义暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    updateProps: ({ value }) => {
      setVal(value)
    }
  }))

  return (
    <AutoComplete
      prefix={IconComponent ? <IconComponent /> : null}
      showClear
      size={size}
      data={data}
      onChange={val => {
        setVal(val)
        input && input(val)
        onChange && onChange(val)
      }}
      placeholder={placeholder}
      value={val}
    />
  )
})
