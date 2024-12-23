import React from 'react'
import { PinCode } from '@douyinfe/semi-ui'

export default ({
  value,
  size = '',
  count = 6,
  format,
  onChange,
  onComplete,
  input
}) => {
  return (
    <PinCode
      size={size}
      count={count}
      value={value}
      format={format}
      onComplete={value => {
        input && input(value)
        onComplete && onComplete(value)
      }}
      onChange={value => {
        input && input(value)
        onChange && onChange(value)
      }}
    />
  )
}
