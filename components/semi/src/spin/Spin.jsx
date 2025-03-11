import React from 'react'
import { Spin } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'

export default ({
  size,
  spinning,
  icon
}) => {
  const IconComponent = SemiIcons[icon] || SemiIcons.IconSpin
  return (
    <Spin size={size} spinning={spinning} indicator={<IconComponent />} />
  )
}
