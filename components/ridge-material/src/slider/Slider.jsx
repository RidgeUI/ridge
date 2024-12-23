import React from 'react'
import { Slider, InputLabel, Select, MenuItem } from '@mui/material'

export default ({
  value,
  size,
  color,
  orientation,
  input,
  onChange
}) => {
  const handleChange = (event, newValue) => {
    input && input(newValue);
    onChange && onChange(newValue);
  };

  return  <Slider orientation={orientation} color={color} size={size} value={value} onChange={handleChange} />
}
