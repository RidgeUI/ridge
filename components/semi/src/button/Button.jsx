import { Button } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'

export default ({
  text = '',
  size = '',
  iconSize,
  type,
  theme,
  icon,
  disabled,
  loading,
  onClick
}) => {
  const IconComponent = SemiIcons[icon]
  return (
    <Button
      type={type}
      theme={theme}
      icon={IconComponent
        ? <IconComponent
            style={{
              fontSize: iconSize + 'px'
            }} size='inherit'
          />
        : null}
      disabled={disabled}
      loading={loading}
      size={size} onClick={() => {
        onClick && onClick()
      }}
    >{text === '' ? null : text}
    </Button>
  )
}
