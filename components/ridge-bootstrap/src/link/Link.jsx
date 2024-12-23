import React from 'react'
export default ({
  text,
  icon,
  href,
  target,
  classList,
  onClick
}) => {
  return (
    <a onClick={onClick} className={['icon-link lh-1', ...classList].join(' ')} href={href} target={target}>
      {icon && <i className={'bi bi-' + icon} />}
      {text ?? ''}
    </a>
  )
}
