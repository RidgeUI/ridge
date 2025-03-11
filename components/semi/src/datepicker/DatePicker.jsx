import React from 'react'
import { DatePicker } from '@douyinfe/semi-ui'

export default ({
  value,
  type,
  input,
  onChange,
  size
}) => {
  return (
    <DatePicker
      value={value}
      type={type}
      size={size}
      onChange={(date, dateString) => {
        input && input(dateString)
        onChange && onChange(dateString)
      }}
    />
  )
}
