import React from 'react'
export default ({
  src,
  text,
  classList,
  onClick
}) => {
  const className = classList.join(' ')
  const classArray = ['object-fit-cover', 'w-100', 'h-100']
  if (className.indexOf('rounded-') === -1) {
    classArray.push('rounded-circle')
  }
  if (className.indexOf('bg-') === -1) {
    classArray.push('bg-secondary-subtle')
  }
  if (className.indexOf('fs-') === -1) {
    classArray.push('fs-3')
  }
  if (className.indexOf('text-') === -1) {
    classArray.push('text-uppercase')
  }

  if (src) {
    return (
      <img className={className + ' ' + classArray.join(' ')} src={src} />
    )
  } else if (text) {
    return <div className={className + ' ' + classArray.join(' ') + ' justify-content-center  d-flex align-items-center'}>{text}</div>
  }
}
