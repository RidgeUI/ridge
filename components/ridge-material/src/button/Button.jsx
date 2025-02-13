import { Button, Icon, IconButton } from '@mui/material'

export default ({
  text,
  icon,
  variant,
  size,
  disabled,
  onClick,
  color
}) => {
  const doOnClick = () => {
    onClick && onClick()
  }
  if (icon && text == null) {
    return <IconButton size={size} disabled={disabled} variant={variant} color={color} onClick={doOnClick}><Icon>{icon}</Icon></IconButton>
  }
  return <Button startIcon={icon ? <Icon>{icon}</Icon> : null} size={size} disabled={disabled} variant={variant} color={color} onClick={doOnClick}>{text}</Button>
}
