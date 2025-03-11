import React from 'react'
import { Image } from '@douyinfe/semi-ui'

export default ({
  width,
  height,
  preview,
  src,
  classList = [],
  onClick
}) => {
  return (
    <Image
      onClick={() => {
        onClick && onClick()
      }}
      imgCls={classList.join(' ')}
      preview={preview}
      width={width}
      height={height}
      src={src}
    />
  )
}
