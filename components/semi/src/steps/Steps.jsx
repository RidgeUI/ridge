import React from 'react'
import { Steps } from '@douyinfe/semi-ui'

export default ({
  options,
  direction,
  current,
  type,
  size,
  onChange
}) => {
  return (
    <Steps
      current={parseInt(current)}
      size={size}
      type={type}
      direction={direction}
      onChange={i => {
        onChange && onChange(i)
      }}
    >
      {options && options.map((opt) => {
        return <Steps.Step key={opt.value} title={opt.value} description={opt.label} />
      })}
    </Steps>
  )
}
