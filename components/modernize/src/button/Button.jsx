import React from 'react'
export default ({
  text = '',
  type = 'primary',
  size = '',
  style = 'general',
  icon,
  rounded,
  full,
  onClick
}) => {
  const classList = ['btn', size]
  const css = {}
  if (style === 'general') {
    classList.push('btn-' + type)
  } else if (style === 'outline') {
    classList.push('btn-outline-' + type)
  } else if (style === 'light') {
    classList.push('bg-' + type + '-subtle')
    classList.push('text-' + type)
  }
  if (rounded) {
    classList.push('rounded-pill')
  }

  if (full) {
    css.width = '100%'
    css.height = '100%'
  }
  return (
    <button
      style={css}
      type='button'
      onClick={onClick}
      className={classList.join(' ')}
    >
      {icon && <i className={'bi me-2 bi-' + icon} />}
      {text}
    </button>
  )
}
