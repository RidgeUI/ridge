import React from 'react'
export default ({
  value,
  input,
  options,
  inline,
  validState
}) => {
  let validName = ''
  if (validState === true) {
    validName = 'is-valid'
  } else if (validState === false) {
    validName = 'is-invalid'
  }

  const checkedArray = value

  return (
    <>
      {options &&
      options.map(op =>
        <div className={'form-check' + (inline ? ' form-check-inline' : '')} key={op.value}>
          <input
            data-value={op.value}
            className={['form-check-input', inline ? 'form-check-inline' : '', validName].join(' ')} type='checkbox' checked={checkedArray.indexOf(op.value) > -1}
            onChange={e => {
              const checkValue = e.target.dataset.value

              if (checkedArray.indexOf(checkValue) > -1) {
                const newValue = checkedArray.filter(v => v !== checkValue)
                input && input(newValue)
              } else {
                const newValue = [...checkedArray, checkValue]
                input && input(newValue)
              }
            }}
          />
          <label className={['form-check-label', validName].join(' ')}>
            {op.label}
          </label>
        </div>)}
    </>
  )
}
