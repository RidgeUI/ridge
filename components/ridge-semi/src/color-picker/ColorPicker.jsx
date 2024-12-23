import React from 'react'
import { ColorPicker, Button } from '@douyinfe/semi-ui'

export default ({
  value,
  input,
  onChange
}) => {
  return (
    <ColorPicker
      usePopover
      alpha
      eyeDropper
      value={ColorPicker.colorStringToValue(value)}
      onChange={val => {
        input && input(val.hex)
        onChange && onChange(val.hex)
      }}
    />
  )
}
