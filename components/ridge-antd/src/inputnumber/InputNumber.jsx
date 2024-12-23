import React from 'react'
import { InputNumber } from 'antd'

export default props => {
  // const [passwordVisible, setPasswordVisible] = React.useState(false)

  const finalProps = Object.assign({}, props)

  if (props.prefixIcon) {
    const Icon = window.icons[props.prefixIcon]
    if (Icon) {
      finalProps.prefix = <Icon />
    }
  }
  if (props.suffixIcon) {
    const Icon = window.icons[props.suffixIcon]
    if (Icon) {
      finalProps.suffix = <Icon />
    }
  }
  return <InputNumber {...finalProps} style={{ width: '100%' }} />
}
