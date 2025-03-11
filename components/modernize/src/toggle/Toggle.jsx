import React from 'react'
export default ({
  value,
  input,
  disabled,
  label
}) => {
  return (
    <div className='form-check form-switch'>
      <input
        className='form-check-input' checked={value} type='checkbox' role='switch' disabled={disabled} onChange={() => {
          input && input(!value)
        }}
      />
      <label className='form-check-label' for='flexSwitchCheckDefault'>{label}</label>
    </div>
  )
}
