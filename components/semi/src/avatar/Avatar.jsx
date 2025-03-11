import React from 'react'
import { Avatar } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'
export default ({
  size,
  shape,
  src,
  text,
  contentMotion,
  topLabel,
  borderColor,
  color,
  bottomPlus,
  onClick
}) => {
  const props = {}

  if (contentMotion) {
    props.border = { color: borderColor, motion: true }
  }

  if (topLabel) {
    props.topSlot = {
      text: topLabel,
      gradientStart: borderColor,
      gradientEnd: borderColor
    }
  }

  if (bottomPlus) {
    const IconPlus = SemiIcons.IconPlus
    props.bottomSlot = {
      shape: 'circle',
      bgColor: borderColor,
      text: <IconPlus />
    }
  }

  return (
    <Avatar
      size={size}
      color={color}
      style={{
        background: color
      }}
      shape={shape}
      src={src}
      onClick={() => {
        onClick && onClick()
      }}
      contentMotion={contentMotion}
      {...props}
    >{text}
    </Avatar>
  )
}
