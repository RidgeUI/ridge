import { Checkbox } from 'antd'

export default props => {
  const finalProps = Object.assign({}, props)
  const onChange = e => {
    if (Array.isArray(e)) {
      props.input && props.input(e)
    } else {
      props.input && props.input(e.target.checked)
    }
  }
  if (props.group) {
    return <Checkbox.Group checked={props.value} onChange={onChange} {...finalProps} />
  } else {
    return <Checkbox checked={props.value} onChange={onChange} {...finalProps}>{props.label}</Checkbox>
  }
}
