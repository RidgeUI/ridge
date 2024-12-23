import { Select } from 'antd'

export default props => {
  const finalProps = Object.assign({}, props, {
    value: props.__isEdit ? undefined : props.value
  })

  return (
    <Select {...finalProps} style={{ width: '100%' }} />
  )
}
