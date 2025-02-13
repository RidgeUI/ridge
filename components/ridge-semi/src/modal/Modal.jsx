import { Modal } from '@douyinfe/semi-ui'
import { useEffect, useRef, useState } from 'react'

export default ({
  __isEdit,
  title = '',
  content,
  textContent = '',
  value,
  mask,
  showHeader,
  showFooter,
  width,
  height,
  confirmLoading,
  onOk,
  onCancel,
  input,
  afterClose
}) => {
  const ref = useRef(null)
  const [hasContainer, setHasContainer] = useState(false)

  useEffect(() => {
    if (ref.current) {
      setHasContainer(true)
    }
  })

  const modalProperties = {
    width,
    height
  }

  if (!showHeader) {
    modalProperties.header = null
  } else {
    modalProperties.title = title
  }
  if (!showFooter) {
    modalProperties.footer = null
  }

  const renderContent = () => {
    if (content) {
      return content()
    } else {
      return textContent ?? ''
    }
  }

  if (__isEdit) {
    return (
      <div
        ref={ref}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
      >
        {hasContainer &&
          <Modal
            style={{
              margin: 0
            }}
            {...modalProperties}
            visible
            mask={false}
            title={title}
            getPopupContainer={() => {
              return ref.current
            }}
          >{renderContent()}
          </Modal>}
      </div>
    )
  } else {
    return (
      <Modal
        {...modalProperties}
        bodyStyle={{
          padding: 0,
          marginBottom: showFooter ? 0 : 16
        }}
        closeOnEsc={false}
        visible={value}
        mask={mask}
        confirmLoading={confirmLoading}
        maskClosable={false}
        onOk={() => {
          onOk && onOk()
        }}
        onCancel={() => {
          input && input(false)
          onCancel && onCancel()
        }}
        afterClose={() => {
          afterClose && afterClose()
        }}
      >{renderContent()}
      </Modal>
    )
  }
}
