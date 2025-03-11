import Text from './Text.jsx'
import { classList, string } from 'ridge-build/src/props.js'
export default {
  name: 'Text',
  title: '文本',
  component: Text,
  icon: 'bi bi-fonts',
  type: 'react',
  props: [
    string('text', '内容', '文本'),
    classList()
  ],
  width: 100,
  height: 22
}
