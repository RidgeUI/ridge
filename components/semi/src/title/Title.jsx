import { Typography } from '@douyinfe/semi-ui'

const { Title } = Typography

export default ({
  text,
  heading
}) => {
  return <Title heading={heading}>{text || ''}</Title>
}
