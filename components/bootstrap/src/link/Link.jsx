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
  const props = {
    cursor: 'pointer'
  }

  if (!__isEdit && href) {
    props.href = href
  }
  return (
    <a onClick={onClick} className={['icon-link lh-1 ', ...classList].join(' ')} target={target} {...props}>
      {icon && <i className={'bi bi-' + icon} />}
      {text ?? ''}
    </a>
  )
}
