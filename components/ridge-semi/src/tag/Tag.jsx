import React from 'react'
import { Tag } from '@douyinfe/semi-ui'

export default ({
  text,
  closable,
  size,
  color,
  type,
  shape,
  onClick,
  onClose
}) => {
  return (
    <Tag
      shape={shape}
      size={size}
      color={color}
      type={type}
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
