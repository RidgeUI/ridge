import React from 'react'
import { Rating } from '@mui/material'

export default ({
  value,
  size,
  max = 5,
  half,
  input,
  onChange
}) => {
  return (
    <Rating
      value={value}
      size={size}
      max={max}
      precision={half ? 0.5 : 1}
      onChange={(event, newValue) => {
        input && input(newValue)
        onChange && onChange(newValue)
      }}
    />
  )
}
