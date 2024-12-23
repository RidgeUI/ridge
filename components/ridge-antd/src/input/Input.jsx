import React from 'react'
import { Input } from 'antd'

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
  if (props.isPassword) {
    // const { EyeTwoTone, EyeInvisibleOutlined } = window.icons
    return (
      <Input.Password {...finalProps} />
    )
  } else if (props.isTextArea) {
    return <Input.TextArea {...finalProps} style={{ height: '100%' }} />
  } else {
    return <Input style={{ background: 'transparent' }} {...finalProps} />
  }
}
