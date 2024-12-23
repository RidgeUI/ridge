import { Button, Icon } from '@mui/material'

export default ({
  text,
  icon,
  variant,
  size,
  disabled,
  onClick,
  color
}) => {
  return <Button startIcon={icon ? <Icon>{icon}</Icon> : null} size={size} disabled={disabled} variant={variant} color={color} onClick={onClick}>{text}</Button>
}
