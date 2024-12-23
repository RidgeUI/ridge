import React from 'react'
import { Breadcrumb } from '@douyinfe/semi-ui'

export default ({
  paths = [],
  separator,
  compact,
  onChange
}) => {
  return (
    <Breadcrumb
      compact={compact}
      separator={separator}
      moreType='popover'
      onClick={(pp) => {
        onChange && onChange(pp.value)
      }}
    >
      {paths && paths.map(pp => {
        return <Breadcrumb.Item key={pp.value}>{pp.label}</Breadcrumb.Item>
      })}
    </Breadcrumb>
  )
}
