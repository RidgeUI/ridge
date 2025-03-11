import { SideSheet } from '@douyinfe/semi-ui'
import { useEffect, useRef, useState } from 'react'

export default ({
  __isEdit,
  title = '',
  content,
  sideWidth,
  placement,
  value,
  mask,
  input,
  onClose
}) => {
  const renderContent = () => {
    if (content) {
      return content()
    } else {
      return ''
    }
  }

  if (__isEdit) {
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
      >
        SideSheet
      </div>
    )
  } else {
    return (
      <SideSheet
        mask={mask}
        maskClosable={false}
        closeOnEsc={false}
        placement={placement}
        width={sideWidth}
        title={title} visible={value} onCancel={() => {
          input && input(false)
          onClose && onClose()
        }}
      >
        {renderContent()}
      </SideSheet>
    )
  }
}
