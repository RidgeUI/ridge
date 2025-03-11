import { Badge, Icon } from '@mui/material'

export default ({
  text,
  color,
  dot
}) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Badge
        style={{
          width: '100%',
          height: '100%'
        }}
        variant={dot ? 'dot' : ''}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }} badgeContent={text} color={color}
      />
    </div>
  )
}
