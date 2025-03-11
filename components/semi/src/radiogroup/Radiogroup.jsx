import React from 'react'
import { RadioGroup } from '@douyinfe/semi-ui'

export default ({
  options,
  value,
  type,
  disabled,
  direction,
  input,
  onChange
}) => {
  return (
    <RadioGroup
      value={value}
      options={options}
      disabled={disabled}
      direction={direction}
      type={type}
      onChange={event => {
        const val = event.target.value
        input && input(val)
        onChange && onChange(val)
      }}
    />
  )
}
