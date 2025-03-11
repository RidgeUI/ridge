import React from 'react'
export default ({
  value,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  classList = [],
  input
}) => {
  return (
    <input
      value={value} onChange={e => {
        input && input(e.target.value)
      }} type='range' className={'form-range ' + classList.join(' ')} min={min} max={max} step={step} disabled={disabled}
    />
  )
}
