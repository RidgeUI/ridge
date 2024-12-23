import React, { useRef, useEffect } from 'react'
import { Progress } from '@douyinfe/semi-ui'

export default ({
  percent,
  color,
  colorStage,
  type,
  direction,
  height,
  width
}) => {
  const style = {
    margin: 0
  }

  if (direction === 'horizontal') {
    style.height = height + 'px'
  }
  if (direction === 'vertical') {
    style.width = width + 'px'
  }
  const finalProps = {
    percent,
    type,
    direction,
    stroke: `rgba(var(--semi-${color}-${colorStage}), 1)`,
    strokeLinecap: 'round'
  }
  if (type === 'circle') {
    finalProps.width = width
  }
  return (
    <Progress
      {...finalProps}
      style={style}
    />
  )
}
