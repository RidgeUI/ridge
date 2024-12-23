import { Tabs, Tab, Icon } from '@mui/material'

export default ({
  value,
  input,
  color,
  centered,
  scrollable,
  orientation,
  iconPosition,
  onChange,
  tabs
}) => {
  const handleChange = val => {
    input && input(val)
    onChange && onChange(val)
  }
  return (
    <Tabs
      variant={scrollable? 'scrollable': ''}
      centered={centered}
      orientation={orientation}
      value={value}
      textColor={color}
      indicatorColor={color}
      onChange={handleChange}
    >
      {tabs && tabs.map((tab, index)=> {
          return <Tab disabled={tab.disabled} iconPosition={iconPosition} icon={tab.icon ? <Icon>{tab.icon}</Icon> : null } label={tab.label} value={tab.value} />
      })}
      </Tabs>
  )
}
