import React from 'react'
import { CheckboxGroup } from '@douyinfe/semi-ui'

export default ({
  options,
  value,
  type,
  disabled,
  direction,
  onChange
}) => {
  return <CheckboxGroup disabled={disabled} options={options} defaultValue={[]} onChange={onChange} value={value} type={type} direction={direction} />
}
