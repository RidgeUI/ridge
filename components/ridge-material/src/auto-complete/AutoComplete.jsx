import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Autocomplete, TextField } from '@mui/material'

export default forwardRef(({
  value,
  size,
  options,
  input,
  onChange,
  placeholder
}, ref) => {
  // const IconComponent = SemiIcons[icon]

  const [val, setVal] = useState(value)

  // 使用useImperativeHandle来定义暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    updateProps: ({ value }) => {
      setVal(value)
    }
  }))

  return (
    <Autocomplete
      size={size}
      value={val}
      disablePortal
      options={options}
      renderInput={(params) => <TextField {...params} label={placeholder} />}
      onChange={(ev, val) => {
        setVal(val)
        input && input(val)
        onChange && onChange(val)
      }}
    />
  )
})
