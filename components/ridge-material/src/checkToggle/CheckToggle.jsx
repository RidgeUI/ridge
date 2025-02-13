import React from 'react'
import { Checkbox } from '@mui/material'

export default ({
  value,
  size,
  color,
  onChange,
  input
}) => {
  return (
    <Checkbox
      size={size}
      color={color}
      checked={value} onChange={() => {
        input && input(!value)
        onChange && onChange(!value)
      }}
    />
  )
}
