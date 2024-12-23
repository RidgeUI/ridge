import React from 'react'
import { Input } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'

export default ({
  value,
  size = '',
  disabled,
  icon,
  password,
  showClear,
  validateStatus,
  input
}) => {
  const IconComponent = SemiIcons[icon]
  return (
    <Input
      size={size}
      mode={password ? 'password' : ''}
      validateStatus={validateStatus}
      value={value}
      prefix={IconComponent ? <IconComponent /> : null}
      disabled={disabled}
      showClear={showClear} onChange={val => {
        input && input(val)
      }}
    />
  )
}
