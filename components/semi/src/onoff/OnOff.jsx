import React from 'react'
import { Switch } from '@douyinfe/semi-ui'

export default ({
  value,
  size,
  loading,
  disabled,
  checkedText,
  uncheckedText,
  onChange,
  input
}) => {
  return (
    <Switch
      checked={value}
      size={size}
      loading={loading}
      checkedText={checkedText}
      uncheckedText={uncheckedText}
      disabled={disabled}
      onChange={(checked, e) => {
        input && input(checked)
        onChange && onChange(checked)
      }}
    />
  )
}
