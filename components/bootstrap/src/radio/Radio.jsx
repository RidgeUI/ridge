import React from 'react'
export default ({
  value,
  options,
  inline,
  disabled,
  validState,
  validMsg,
  invalidMsg,
  input,
  onChange
}) => {
  let validName = ''
  if (validState === true) {
    validName = 'is-valid'
  } else if (validState === false) {
    validName = 'is-invalid'
  }

  return (
    <>
      {options && options.map(op =>
        <div className={['form-check', inline ? 'form-check-inline' : '', validName].join(' ')} key={op.value}>
          <input
            disabled={disabled} className={['form-check-input', validName].join(' ')} type='radio' name={op.value} value={op.value} id={op.value} checked={value === op.value} onChange={e => {
              input && input(e.target.value)
              onChange && onChange(e.target.value)
            }}
          />
          <label class='form-check-label' for={op.value}>
            {op.label}
          </label>
        </div>
      )}
      {validState === true && <div class='valid-feedback'>{validMsg}</div>}
      {validState === false && <div class='invalid-feedback'>{invalidMsg}</div>}
    </>
  )
}
