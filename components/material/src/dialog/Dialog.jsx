import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Paper } from '@mui/material'

export default ({
  __isEdit,
  title,
  content,
  value,
  showFooter = true,
  width,
  height,
  confirmLoading,
  onOk,
  onCancel,
  input
}) => {
  const handleClose = () => {
    input && input(false)
    onCancel && onCancel()
  }

  const handleOk = () => {
    onOk && onOk()
  }
  if (__isEdit) {
    return (
      <Paper style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
      }}
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          {content && content()}
        </DialogContent>
        {showFooter &&
          <DialogActions>
            <Button onClick={handleClose}>取消</Button>
            <Button type='submit'>确认</Button>
          </DialogActions>}
      </Paper>
    )
  } else {
    return (
      <Dialog
        fullScreen
        maxWidth={width}
        open={value}
        PaperProps={{
          style: {
            width: width + 'px',
            height: height + 'px'
          }
        }}
        onClose={handleClose}
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          {content && content()}
        </DialogContent>
        {showFooter &&
          <DialogActions>
            <Button onClick={handleClose}>取消</Button>
            <Button loading={confirmLoading} onClick={handleOk} type='submit'>确认</Button>
          </DialogActions>}
      </Dialog>
    )
  }
}
