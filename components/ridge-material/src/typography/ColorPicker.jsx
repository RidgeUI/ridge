import React from 'react'
import { ColorPicker, createColor } from 'material-ui-color'

export default ({
  value,
  onChange
}) => {
  const color = createColor(value)
  const handleChange = val => {
    if (typeof val === 'string') {
      onChange && onChange(val)
    } else {
      onChange && onChange('#' + val.hex)
    }
  }
  return <ColorPicker value={color} onChange={handleChange} />
}
