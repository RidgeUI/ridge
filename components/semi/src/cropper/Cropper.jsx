import React, { useEffect, useRef } from 'react'
import { Cropper } from '@douyinfe/semi-ui'

export default ({
  src = 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/other/image.png',
  aspectRatio = 1 / 1
}) => {
  const ref = useRef(null)
  debugger
  console.log(Cropper)
  useEffect(() => {
    console.log(ref.current)
  })
  const props = {
    aspectRatio
  }
  if (src) {
    props.src = src
  }
  return (
    <Cropper
      onMouseUp={() => {
        console.log('onMouseUp')
      }}
      {...props}
      ref={ref}
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  )
}
