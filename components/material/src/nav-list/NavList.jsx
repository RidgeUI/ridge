import { Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'

export default ({
  value,
  onChange,
  listData,
  dense
}) => {
  return (
    <List dense={dense}>
      {listData && listData.map((item, i) => {
        if (item && item.label && item.value) {
          return (
            <ListItem disablePadding key={i}>
              <ListItemButton
                selected={value === item.value}
                onClick={() => {
                  onChange && onChange(item.value)
                }}
              >
                <ListItemIcon>
                  {item.icon && <Icon>{item.icon}</Icon>}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          )
        } else {
          return <Divider key={i} />
        }
      })}
    </List>
  )
}
