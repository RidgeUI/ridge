import React from 'react'
export default ({
  text = '',
  icon = '',
  type = 'primary',
  pill = false,
  showClose = false,
  classList = [],
  onClose,
  onClick
}) => {
  return (
    <span
      onClick={e => onClick && onClick()}
      className={[...classList, 'badge', 'align-top', 'd-flex', 'justify-content-center', 'align-items-center', 'text-bg-' + type, pill ? 'rounded-pill' : ''].join(' ')}
    >
      {icon && <div style={{ display: 'inline-block', height: ' .25em', width: '1.25em', verticalAlign: '-0.275em', marginRight: '0.25em' }} dangerouslySetInnerHTML={{ __html: icon }} />}
      {text}
      {showClose &&
        <i
          class='bi bi-x-circle-fill ms-1' style={{ cursor: 'pointer' }} onClick={e => {
            e.stopPropagation()
            onClose && onClose()
          }}
        />}
    </span>
  )
}
