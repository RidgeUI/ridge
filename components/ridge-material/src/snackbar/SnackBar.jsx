import { Snackbar, Button } from '@mui/material'

export default ({
  value,
  autoHideDuration,
  message,
  btnText,
  input,
  onChange
}) => {
  const properties = {
    open: value,
    autoHideDuration,
    onClose: () => {
      input && input(false)
      onChange && onChange(false)
    },
    message
  }

  if (btnText) {
    properties.action = (
      <Button color='secondary' size='small'>
        {btnText}
      </Button>
    )
  }
  return <Snackbar {...properties} />
}
