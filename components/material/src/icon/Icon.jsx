import React from 'react'
import { Icon } from '@mui/material'

export default ({
  icon,
  color,
  fontSize
}) => {
  return <Icon color={color} sx={{ fontSize }}>{icon}</Icon>
}
