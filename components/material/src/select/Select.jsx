import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

export default ({
  value,
  label,
  options=[],
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

  return (
    <FormControl fullWidth size={size} variant={variant} disabled={readonly} error={error}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        value={value}
        label="Age"
        onChange={handleChange}
      >
        {options.map( opt =>
          <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
        )}
      </Select>
    </FormControl>
  )
}
