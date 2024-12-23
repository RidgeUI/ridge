import React from 'react'
import { Rating } from '@douyinfe/semi-ui'

export default ({
  value,
  size,
  allowHalf = true,
  disabled = false,
  count = 5,
  onChange,
  input
}) => {
  return (
    <Rating
      value={value}
      size={size}
      count={count}
      allowHalf={allowHalf}
      disabled={disabled}
      onChange={val => {
        input && input(val)
        onChange && onChange(val)
      }}
    />
  )
}
