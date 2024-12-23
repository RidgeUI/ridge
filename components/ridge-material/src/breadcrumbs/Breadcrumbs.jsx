import { Breadcrumbs, Icon, Typography, Link } from '@mui/material'

export default ({
  navs,
  onClick
}) => {
  return (
    <Breadcrumbs>
      {navs && navs.map((item, index) => {
        if (index === navs.length - 1) {
          // Last
          return (
            <Typography key={index} color={item.color || 'text.primary'} sx={{ display: 'flex', alignItems: 'center' }}>
              {item.icon && <Icon sx={{ mr: 0.5 }} fontSize="inherit">{item.icon}</Icon>}
              {item.label}
            </Typography>
          )
        } else {
          return (
            <Link
              key={index}
              sx={{ display: 'flex', alignItems: 'center' }}
              underline='hover' color={item.color || 'text.inherit'} onClick={() => {
                onClick && onClick(item.value)
              }}
            >  {item.icon && <Icon sx={{ mr: 0.5 }} fontSize="inherit">{item.icon}</Icon>}
              {item.label}
            </Link>
          )
        }
      })}
    </Breadcrumbs>
  )
}
