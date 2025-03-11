import React from 'react'
export default ({
  value = '',
  rows = 3,
  size = 'normal',
  placeholder,
  validState,
  validMsg,
  invalidMsg,
  classNames = [],
  disabled,
  input
}) => {
  let validName = ''
  if (validState === true) {
    validName = 'is-valid'
  } else if (validState === false) {
    validName = 'is-invalid'
  }
  return (
    <>
      <textarea
        style={{
          width: '100%'
        }}
        rows={rows}
        disabled={disabled}
        type='text' className={['form-control', validName, 'form-control-' + size, ...classNames].join(' ')} placeholder={placeholder} value={value} onChange={e => {
          input && input(e.target.value)
        }}
      />
      {validState === true && <div class='valid-feedback'>{validMsg}</div>}
      {validState === false && <div class='invalid-feedback'>{invalidMsg}</div>}
    </>
  )
}
