import React from 'react'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'

export default ({
  options,
  value,
  size,
  row,
  color,
  input,
  onChange
}) => {
  const handleChange = (event) => {
    input && input(event.target.value)
    onChange && onChange(event.target.value)
  }

  return (
    <RadioGroup
      row={row}
      value={value}
      onChange={handleChange}
    >
      {
      options.map(opt =>
        <FormControlLabel
          key={opt.value}
          value={opt.value}
          label={opt.label}
          control={
            <Radio
              size={size}
              color={color}
            />
        }
        />)
}
    </RadioGroup>
  )
}
