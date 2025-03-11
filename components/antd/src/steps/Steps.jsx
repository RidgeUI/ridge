import React from 'react'
import { Steps } from 'antd'

export default props => {
  const fin = Object.assign({}, props, {
    current: props.value,
    onChange: val => {
      props.input && props.input(val)
    }
  })

  return <Steps {...fin} />
}
