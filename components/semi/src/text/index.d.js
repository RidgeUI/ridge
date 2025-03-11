import Text from './Text.jsx'
import { size, type } from '../props'
import { boolean, string, value, classList, radiogroup, onClick } from 'ridge-build/src/props.js'
export default {
  name: 'text',
  title: '文本',
  component: Text,
  icon: 'icons/typography.svg',
  type: 'react',
  props: [
    string(),
    radiogroup('size', '大小', [{ label: '小', value: 'small' }, { label: '正常', value: 'normal' }, { label: '继承', value: 'inherit' }], 'normal', true),
    boolean('copyable', '可复制', false),
    boolean('ellipsis', '省略', false),
    type,
    string('link', '链接地址', ''),
    classList()
  ],
  events: [
    onClick
  ],
  width: 300,
  height: 40

}
