import React, { useState, forwardRef, useImperativeHandle } from 'react'
export default forwardRef(({
  value,
  text,
  color,
  onChange,
  input
}, ref) => {
  const props = {}

  if (value) {
    props.checked = '1'
  }
  return (
    <div className='form-check form-switch '>
      <input
        className={'form-check-input ' + color} type='checkbox' {...props} onChange={() => {
          input && input(!value)
          onChange && onChange(!value)
        }}
      />
      <label className='form-check-label'>{text}</label>
    </div>
  )
})
