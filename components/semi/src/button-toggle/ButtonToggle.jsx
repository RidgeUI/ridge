import { Button } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'

export default ({
  text = '',
  size = '',
  value,
  input,
  icon,
  onChange
}) => {
  const IconComponent = SemiIcons[icon]
  const properties = {}

  if (value === true) {
    properties.type = 'primary'
    properties.theme = 'solid'
  } else {
    properties.type = 'tertiary'
    properties.theme = 'outline'
  }
  return (
    <Button
      {...properties}
      icon={IconComponent ? <IconComponent /> : null}
      size={size}
      onClick={() => {
        input && input(!value)
        onChange && onChange(!value)
      }}
    >{text === '' ? null : text}
    </Button>
  )
}
