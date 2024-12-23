import { Button, SplitButtonGroup, Dropdown } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'

export default ({
  text = '',
  size = '',
  type,
  theme,
  options = [],
  onClick
}) => {
  const IconTreeTriangleDown = SemiIcons.IconTreeTriangleDown
  const btnProps = {
    theme,
    type,
    size
  }
  const menu = options.map(opt => {
    if (opt.label) {
      const node = {
        node: 'item',
        name: opt.label,
        key: opt.value,
        onClick: () => {
          onClick && onClick(opt.value)
        }
      }
      if (opt.icon) {
        const IconComponent = SemiIcons[opt.icon]
        node.icon = <IconComponent />
      }
      return node
    } else {
      return {
        node: 'divider'
      }
    }
  })
  return (
    <SplitButtonGroup>
      <Button {...btnProps}>{text}</Button>
      <Dropdown clickToHide onVisibleChange={(v) => {}} menu={menu} trigger='click' position='bottom'>
        <Button {...btnProps} icon={<IconTreeTriangleDown />} />
      </Dropdown>
    </SplitButtonGroup>
  )
}
