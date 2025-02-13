import React from 'react'
export default ({
  src,
  objectFit,
  onClick,
  classList
}) => {
  return (
    <img
      src={src} className={[...classList, objectFit, 'img-fluid', 'w-100', 'h-100'].join(' ')} onClick={() => {
        onClick && onClick()
      }}
    />
  )
}
