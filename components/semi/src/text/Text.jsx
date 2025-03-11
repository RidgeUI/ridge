import { Typography } from '@douyinfe/semi-ui'

const { Text } = Typography

export default ({
  text,
  size,
  type,
  copyable,
  link,
  ellipsis,
  onClick,
  classList = []
}) => {
  return <Text onClick={() => { onClick && onClick() }} link={link ? { href: link } : false} ellipsis={ellipsis ? { showTooltip: true } : false} copyable={copyable} size={size} type={type} className={classList.join(' ')}>{text || ''}</Text>
}
