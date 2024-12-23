import React from 'react'
import { Avatar, Icon, InputLabel, Select, MenuItem } from '@mui/material'

export default ({
  src,
  text,
  color,
}) => {
  return <Avatar
      src={src}
      sx={{ width: '100%', height: '100%' }}
    >{text}
    <Icon>folder_icon</Icon>
      </Avatar>
}
