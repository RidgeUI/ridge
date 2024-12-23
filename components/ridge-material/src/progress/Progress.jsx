import { CircularProgress, LinearProgress, Box, Typography } from '@mui/material'

function CircularProgressWithLabel (props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant='caption' component='div' color='text.secondary'>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  )
}

function LinearProgressWithLabel (props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='text.secondary'>{`${Math.round(
          props.value
        )}%`}
        </Typography>
      </Box>
    </Box>
  )
}

export default ({
  circular = true,
  determinate = false,
  value,
  valueBuffer,
  color,
  withLabel = false
}) => {
  const properties = {
    color
  }

  if (determinate) {
    properties.variant = 'determinate'
    properties.value = value
    if (valueBuffer) {
      properties.valueBuffer = valueBuffer
    }
  }

  if (circular) {
    if (withLabel && determinate) {
      return <CircularProgressWithLabel {...properties} />
    } else {
      return <CircularProgress {...properties} />
    }
  } else {
    if (withLabel && determinate) {
      return <LinearProgressWithLabel {...properties} />
    } else {
      return <LinearProgress {...properties} />
    }
  }
}
