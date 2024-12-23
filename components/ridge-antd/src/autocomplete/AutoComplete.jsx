import { AutoComplete } from 'antd'

export default props => {
  const finalProps = Object.assign({}, props)

  return <AutoComplete style={{ width: '100%'}} {...finalProps} />
}
