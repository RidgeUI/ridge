import { MobileStepper } from '@mui/material'

export default ({
  steps,
  value,
  variant
}) => {
  return (
    <MobileStepper
      variant={variant}
      steps={steps}
      position='static'
      activeStep={value}
    />
  )
}
