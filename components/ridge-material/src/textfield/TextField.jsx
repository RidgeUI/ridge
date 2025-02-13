import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { TextField, InputLabel, Select, MenuItem } from '@mui/material'

export default forwardRef(({
  value,
  label,
  required,
  type,
  variant,
  size,
  autoFocus,
  readonly,
  error,
  input,
  onChange
}, ref) => {
  const [val, setVal] = useState(value)

  // 使用useImperativeHandle来定义暴露给父组件的方法
  useImperativeHandle(ref, () => (
    Object.assign({}, ref.current, {
      updateProps: ({ value }) => {
        if (value !== val) {
          setVal(value)
        }
      }
    }))
  )

  const handleChange = (event) => {
    setVal(event.target.value)
    input && input(event.target.value)
    onChange && onChange(event.target.value)
  }
  return <TextField size={size} autoFocus={autoFocus} fullWidth readonly={readonly} type={type} required={required} error={error} value={val} label={label} variant={variant} onChange={handleChange} />
})
