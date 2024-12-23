import { Cascader } from "antd";

export default props => {
  const finalProps = Object.assign({}, props)

  return <Cascader style={{ width: '100%'}} {...finalProps} />
}
