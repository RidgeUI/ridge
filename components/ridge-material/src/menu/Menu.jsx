import React, { useEffect, useRef, useState } from 'react'
import { Button, Menu, MenuItem, Divider, Icon, ListItemIcon, IconButton } from '@mui/material'

export default ({
  text,
  icon,
  variant,
  color,
  size,
  options,
  onMenuClick
}) => {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  useEffect(() => {
    setAnchorEl(ref.current)
  }, [])
  return (
    <div>
      <Button
        ref={ref}
        variant={variant}
        color={color}
        size={size}
        endIcon={icon ? <Icon>{icon}</Icon> : null}
        onClick={handleClick}
      >
        {text}
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {options.map((opt, index) => {
          if (opt.label) {
            return (
              <MenuItem onClick={handleClose} key={index}>
                {opt.icon &&
                  <ListItemIcon>
                    <Icon>{opt.icon}</Icon>
                  </ListItemIcon>}
                {opt.label}
              </MenuItem>
            )
          } else {
            return <Divider key={index} />
          }
        })}
      </Menu>
    </div>
  )
}
