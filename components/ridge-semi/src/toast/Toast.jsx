import React, { useEffect, useRef, useState } from 'react'
import { Toast } from '@douyinfe/semi-ui'

export default ({
  content,
  value,
  duration,
  position,
  showClose,
  method,
  theme,
  __isEdit,
  input
}) => {
  const ref = useRef(null)
  const [id, setId] = useState(null)

  useEffect(() => {
    const options = {
      content,
      position,
      showClose,
      theme,
      onClose: () => {
        input && input(false)
      }
    }
    if (__isEdit) {
      options.duration = 0
    } else {
      options.duration = duration
      options.getPopupContainer = () => {
        return document.body
      }
    }
    if (value || __isEdit) {
      if (id) {
        Toast[method](Object.assign(options, { id }))
      } else {
        const openId = Toast[method](options)
        setId(openId)
      }
    } else if (value === false) {
      id && Toast.close(id)
      setId(null)
    }
  })
  return (
    <div
      ref={ref} style={{
        width: '100%',
        height: '100%'
      }}
    >
      {__isEdit && '通知组件'}
    </div>
  )
}
