import React from 'react'
import { TagInput } from '@douyinfe/semi-ui'

export default ({
  value,
  disabled = false,
  size,
  validateStatus,
  onChange,
  input
}) => {
  return (
    <TagInput
      value={value}
      size={size}
      showClear
      allowDuplicates={false}
      validateStatus={validateStatus}
      disabled={disabled}
      onChange={val => {
        input && input(val)
        onChange && onChange(val)
      }}
    />
  )
}
