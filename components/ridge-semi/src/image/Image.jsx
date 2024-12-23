import React from 'react'
import { Image } from '@douyinfe/semi-ui'

export default ({
  width,
  height,
  preview,
  src,
  onClick
}) => {
  return (
    <Image
      onClick={() => {
        onClick && onClick()
      }}
      preview={preview}
      width={width}
      height={height}
      src={src}
    />
  )
}
