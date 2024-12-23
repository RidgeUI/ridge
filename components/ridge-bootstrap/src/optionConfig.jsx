import React from 'react'
import { ReactComposite } from 'ridgejs'

export default ({
  value,
  onChange
}) => {
  return (
    <ReactComposite
      app='ridge-website'
      path='field/OptionListEdit'
      value={value}
      onChange={payload => {
        onChange && onChange(payload)
      }}
    />
  )
}
