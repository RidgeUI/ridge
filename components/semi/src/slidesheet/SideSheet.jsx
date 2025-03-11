import React from 'react'
import { SideSheet } from '@douyinfe/semi-ui'

export default ({
  __isEdit,
  content,
  title,
  placement,
  value,
  mask,
  maskClosable,
  closable,
  customizeWidth,
  input
}) => {
  if (__isEdit) {
    return (
      <div>
        {content && content()}
      </div>
    )
  } else {
    return (
      <SideSheet
        title={title} placement={placement} visible={value} width={customizeWidth} mask={mask} maskClosable={maskClosable} closable={closable}
        onCancel={() => {
          input && input(false)
        }}
      >
        {content && content()}
      </SideSheet>
    )
  }
}
