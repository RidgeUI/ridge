import React, { useRef, useEffect } from 'react'

import { createPortal } from 'react-dom'
export default ({
  value,
  title,
  body,
  showFooter = true,
  showHeader = true,
  width,
  height,
  input,
  onClose,
  onConfirm,
  __isEdit,
  confirmText
}) => {
  const headerRef = useRef()
  const bodyRef = useRef()
  const footerRef = useRef()


  const onClickClose = () => {
    input && input(false)
    onClose && onClose()
  }
  useEffect(() => {
    if (!__isEdit) {
      // if (body) {
      //   body.mount(bodyRef.current)
      // }
      // if (footer && footerRef.current) {
      //   footerRef.current.innerHTML = ''
      //   footer.mount(footerRef.current)
      // }
      // if (header && headerRef.current) {
      //   header.mount(headerRef.current)
      // }
    }
  })

  const modalStyle = __isEdit
    ? {
        width: '100%',
        height: '100%',
        margin: 0,
        maxHeight: 'initial',
        maxWidth: 'initial'
      }
    : {
        width: width + 'px',
        height: height + 'px',
        maxHeight: 'initial',
        maxWidth: 'initial'
      }
  const ModalDialog = () => (
    <div className='modal-dialog' style={modalStyle}>
      <div className='modal-content' style={{ height: '100%' }}>
        {showHeader &&
          <div className='modal-header' ref={headerRef}>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>{title ?? ''}</h1>
            <button onClick={onClickClose} type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
          </div>}
        <div className='modal-body' ref={bodyRef}>
          {body && body()}
        </div>
        {
        showFooter &&
          <div className='modal-footer' ref={footerRef}>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={onClickClose}>关闭</button>
            <button type='button' className='btn btn-primary' onClick={onConfirm}>{confirmText ?? '确定'}</button>
          </div>
        }
      </div>
    </div>
  )
  return (
    <>
      {__isEdit
        ? <div className={['modal', 'fade', 'show'].join(' ')} style={{ display: 'block', position: 'relative' }}><ModalDialog /></div>
        : createPortal(
          <>
            <div className={['modal', 'fade', value ? 'show' : ''].join(' ')} style={{ display: value ? 'block' : 'none' }}>
              <ModalDialog />
            </div>
            {value && <div class='modal-backdrop fade show' />}
          </>,
          document.body
        )}
    </>

  )
}
