import { Stepper, Typography, Step, StepLabel } from '@mui/material'

export default ({
  value,
  steps,
  vertical
}) => {
  return (
    <Stepper orientation={vertical ? 'vertical' : 'horizontal'} activeStep={3}>
      {steps.map(({ label, optional, icon }, index) => {
        const stepProps = {}
        const labelProps = {}
        labelProps.optional = (
          <Typography variant='caption'>{optional}</Typography>
        )
        if (index + 1 <= value) {
          stepProps.completed = true
        } else {
          stepProps.completed = false
        }
        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        )
      })}
    </Stepper>
  )
}
