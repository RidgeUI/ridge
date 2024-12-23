import React from 'react'
import { Slider, Typography, Select, MenuItem } from '@mui/material'

export default ({
  text,
  align,
  noWrap,
  color,
  variant
}) => {
  const properties = {
    variant,
    noWrap,
    align
  }
  return <Typography color={color} {...properties} gutterBottom>{text}</Typography>
}
