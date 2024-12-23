import React from 'react'
export default ({
  src,
  onClick,
  classList
}) => {
  return (
    <img
      src={src} className={[...classList, 'img-fluid', 'w-100', 'h-100'].join(' ')} onClick={() => {
        onClick && onClick()
      }}
    />
  )
}
