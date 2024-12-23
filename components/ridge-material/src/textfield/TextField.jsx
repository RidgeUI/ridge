import React from 'react'
import { TextField, InputLabel, Select, MenuItem } from '@mui/material'

export default ({
  value,
  label,
  required,
  type,
  variant,
  size,
  readonly,
  error,
  input,
  onChange
}) => {
  const handleChange = (event) => {
    input && input(event.target.value);
    onChange && onChange(event.target.value);
  };

  return  <TextField size={size} readonly={readonly} type={type} required={required} error={error} value={value} label={label} variant={variant} onChange={handleChange}/>
}
