import { Typography } from 'antd'

export default props => {
  const { Text } = Typography
  // const conf = props

  // if (props.rows > 1) {
  //   conf.ellipsis = {
  //     rows: props.rows,
  //     expandable: true,
  //     suffix: '...'
  //   }
  // }
  return (
    <Text
      style={{
        width: '100%',
        height: '100%'
      }} {...props}
    >{props.text}
    </Text>
  )
}
