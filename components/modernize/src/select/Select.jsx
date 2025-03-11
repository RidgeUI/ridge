import React from 'react'
export default ({
  value = '',
  size = '',
  options,
  validState,
  disabled,
  onChange,
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
      <select
        value={value}
        className={['form-select', 'mr-sm-2', 'form-select-' + size, validName].join(' ')} disabled={disabled} onChange={e => {
          input && input(e.target.value)
          onChange && onChange(e.target.value)
        }}
      >
        {options && options.map(op => <option value={op.value} key={op.value}>{op.label}</option>)}
      </select>
    </>
  )
}
