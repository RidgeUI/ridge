import React from 'react'
import { Switch, InputLabel, Select, MenuItem } from '@mui/material'

export default ({
  value,
  size,
  color,
  input,
  onChange
}) => {
  const handleChange = (event) => {
    input && input(event.target.checked);
    onChange && onChange(event.target.checked);
  };

  return <Switch szie={size} color={color} checked={value} onChange={handleChange}/>
}
