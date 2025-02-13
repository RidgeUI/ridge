import React from 'react'
import { Tag } from '@douyinfe/semi-ui'

export default ({
  text,
  closable,
  size,
  color,
  type,
  customColor,
  shape,
  onClick,
  onClose
}) => {
  const config = {
    shape,
    size,
    color,
    type
  }
  if (customColor) {
    if (type === 'ghost') {
      config.style = {
        color: customColor,
        borderColor: customColor
      }
    }
    if (type === 'solid') {
      config.style = {
        background: customColor
      }
    }
  }
  return (
    <Tag
      {...config}
      onClick={() => {
        onClick && onClick()
      }}
      closable={closable} onClose={(value, e) => {
        e.preventDefault()
        e.stopPropagation()
        onClose && onClose()
      }}
    >{text}
    </Tag>
  )
}
