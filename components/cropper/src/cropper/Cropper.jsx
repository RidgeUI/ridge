import React, { useEffect, useRef } from 'react'
export default ({
  src,
  aspectRatio = 1 / 1,
  outputWidth = 100,
  outputHeight = 100,
  outputFormat = 'image/webp',
  blobChange
}) => {
  const ref = useRef()

  let url = src
  if (src instanceof Blob) {
    url = URL.createObjectURL(src)
  }
  useEffect(() => {
    if (ref.current) {
      if (ref.current.cropperInstance) { // 销毁之前的实例
        ref.current.cropperInstance.destroy()
      }
      const cropper = new window.Cropper(ref.current, {
        aspectRatio, // 宽高比
        cropend (event) { // 截图数据
          blobChange && blobChange(cropper.getCroppedCanvas({
            width: outputWidth,
            height: outputHeight
          }).toDataURL(outputFormat))
        }
      })
      ref.current.cropperInstance = cropper
    }
  }, [src])

  return (
    <div className='cropper-bg' style={{ width: '100%', height: '100%' }}>
      <img
        ref={ref} src={url} style={{
          display: 'block',
          maxWidth: '100%'
        }}
      />
    </div>
  )
}
