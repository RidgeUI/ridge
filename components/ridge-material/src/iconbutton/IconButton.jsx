import { IconButton, Icon } from '@mui/material'

export default ({
  text,
  icon,
  variant,
  disabled,
  onClick,
  size,
  color
}) => {
  return (
    <IconButton size={size} disabled={disabled} variant={variant} color={color} onClick={onClick}>
      <Icon>{icon}</Icon>
    </IconButton>
  )
}
