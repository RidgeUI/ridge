import React, { useRef, useEffect } from 'react'
import { Tooltip, Popconfirm, Button } from '@douyinfe/semi-ui'

export default ({
  content,
  title,
  size = '',
  type,
  theme,
  onCancel,
  onConfirm,
  btnText
}) => {
  return (
    <Popconfirm
      content={content} title={title}
      onCancel={onCancel}
      onConfirm={onConfirm}
    >
      <Button
        type={type}
        theme={theme}
        size={size}
      >{btnText}
      </Button>
    </Popconfirm>
  )
}
