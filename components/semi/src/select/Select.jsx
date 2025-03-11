import React from 'react'
import { Select } from '@douyinfe/semi-ui'

export default ({
  value,
  options,
  size,
  multiple,
  disabled,
  validateStatus,
  showClear,
  filter,
  input,
  onChange
}) => {
  return (
    <Select
      value={value}
      optionList={options}
      size={size}
      disabled={disabled}
      multiple={multiple}
      validateStatus={validateStatus}
      showClear={showClear}
      filter={filter}
      style={{
        width: '100%'
      }}
      onChange={val => {
        input && input(val)
        onChange && onChange(val)
      }}
    />
  )
}
