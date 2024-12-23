import React from 'react'
import { TimePicker } from '@douyinfe/semi-ui'

export default ({
  value,
  disabled = false,
  size,
  format = 'HH:mm:ss',
  minuteStep,
  hourStep,
  secondStep,
  onChange,
  input
}) => {
  return (
    <TimePicker
      value={value}
      size={size}
      disabled={disabled}
      format={format}
      hourStep={hourStep}
      minuteStep={minuteStep}
      secondStep={secondStep}
      onChange={val => {
        input && input(val)
        onChange && onChange(val)
      }}
    />
  )
}
