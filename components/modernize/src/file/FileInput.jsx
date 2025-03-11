import React, { useState, forwardRef, useImperativeHandle } from 'react'
export default forwardRef(({
  size,
  onChange,
  input
}, ref) => {
  return (
    <input
      className={'form-control form-control-' + size} type='file' onChange={event => {
        const files = event.target.files
        if (files.length > 0) {
          // 获取第一个文件对象
          const file = files[0]
          input && input(file)
          onChange && onChange(file)
        }
      }}
    />
  )
})
