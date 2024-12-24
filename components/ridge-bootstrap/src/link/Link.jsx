import React from 'react'
export default ({
  text,
  icon,
  href,
  __isEdit,
  target,
  classList,
  onClick
}) => {
  return (
    <a onClick={onClick} className={['icon-link lh-1 ', ...classList].join(' ')} href={__isEdit ? 'javascript:void(0)' : href} target={target}>
      {icon && <i className={'bi bi-' + icon} />}
      {text ?? ''}
    </a>
  )
}
