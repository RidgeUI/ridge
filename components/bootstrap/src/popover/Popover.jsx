import React, { useEffect, useRef } from 'react'

export default ({
  icon,
  content,
  placement = 'top',
  classList
}) => {
  const ref = useRef()

  useEffect(() => {
    new bootstrap.Popover(ref.current)
  })
  return (
    <span ref={ref} data-bs-placement={placement} data-bs-toggle='popover' data-bs-trigger='hover focus' data-bs-content={content}>
      <i
        className={['bi', 'bi-' + icon, icon, ...classList].join(' ')} style={{
          width: '100%',
          cursor: 'pointer',
          height: '100%',
          display: 'block',
          textAlign: 'center'
        }}
      />
    </span>
  )
}
