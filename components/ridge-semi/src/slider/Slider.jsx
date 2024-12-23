import React from 'react'
import { Slider } from '@douyinfe/semi-ui'

export default ({
  value,
  disabled = false,
  min = 0,
  max = 100,
  step = 1,
  direction,
  onChange,
  input
}) => {
  return (
    <Slider
      value={value}
      disabled={disabled}
      min={min}
      max={max}
      step={step}
      vertical={direction === 'vertical'}
      onChange={val => {
        input && input(val)
        onChange && onChange(val)
      }}
    />
  )
}
