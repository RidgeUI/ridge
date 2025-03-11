import React from 'react'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

export default ({
  options,
  value,
  size,
  color,
  type,
  row,
  input,
  onChange
}) => {
  return (
    <FormGroup row={row}>
      {options.map(opt => <FormControlLabel
        key={opt.value} control={<Checkbox
          size={size}
          color={color}
          onChange={event => {
            let newValue = null
            const checked = event.target.checked
            if (checked) {
              newValue = [...value, opt.value]
            } else {
              newValue = value.filter(v => v !== opt.value)
            }
            onChange && onChange(newValue)
            input && input(newValue)
          }}
          checked={value.indexOf(opt.value) > -1}
                                 />} label={opt.label}
                          />)}
    </FormGroup>
  )
}
