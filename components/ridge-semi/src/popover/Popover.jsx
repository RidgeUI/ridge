import React from 'react'
import { Popover, Tag } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'
export default ({
  text,
  icon,
  size,
  position,
  color,
  placeholder
}) => {
  const IconComponent = SemiIcons[icon]

  const style = {
    width: '100%',
    fontSize: size + 'px',
    color
  }

  return (
    <Popover
      position={position}
      showArrow
      content={
        <article style={{
          maxWidth: '360px'
        }}
        >
          {text}
        </article>
  }
    >
      {IconComponent && <IconComponent style={style} />}
      {!IconComponent && placeholder && <Tag>{placeholder}</Tag>}
    </Popover>
  )
}
