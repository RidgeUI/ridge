import { BottomNavigation, Icon, BottomNavigationAction } from '@mui/material'

export default ({
  value,
  showLabels,
  tabs,
  input,
  onChange
}) => {
  return (
    <BottomNavigation
      showLabels={showLabels}
      value={value}
      onChange={(event, newValue) => {
        input && input(newValue)
        onChange && onChange(newValue)
      }}
    >
      {tabs && tabs.map((tab, index) => {
        return <BottomNavigationAction key={index} label={tab.label} icon={tab.icon ? <Icon>{tab.icon}</Icon> : null} />
      })}
    </BottomNavigation>
  )
}
