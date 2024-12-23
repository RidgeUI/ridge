import { Chip, Avatar, Icon } from '@mui/material'

export default ({
  label,
  variant,
  avatar,
  color,
  size,
  icon,
  clickable,
  deletable,
  onDelete,
  onClick
}) => {
  const spreads = {
    color,
    size,
    label,
    variant
  }
  if (clickable) {
    spreads.onClick = () => {
      onClick && onClick()
    }
  }
  if (deletable) {
    spreads.onDelete = () => {
      onDelete && onDelete()
    }
  }

  if (avatar) {
    spreads.avatar = <Avatar alt='Natacha' src={avatar} />
  } else if (icon) {
    spreads.icon = <Icon>{icon}</Icon>
  }

  return <Chip {...spreads} />
}
