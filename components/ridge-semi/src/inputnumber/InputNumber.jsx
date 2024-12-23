import React from 'react'
import { InputNumber } from '@douyinfe/semi-ui'

export default ({
  value,
  size = '',
  disabled,
  min,
  max,
  innerButtons,
  input
}) => {
  return (
    <InputNumber
      size={size}
      value={value}
      min={min}
      max={max || Number.MAX_SAFE_INTEGER}
      innerButtons={innerButtons}
      disabled={disabled}
      onChange={val => {
        input && input(val)
      }}
    />
  )
}
