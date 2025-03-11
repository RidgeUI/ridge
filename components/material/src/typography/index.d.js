import { boolean, onChange, value, number, optionConfig, string, radiogroup, select } from 'ridge-build/src/props.js'
import Typography from './Typography.jsx'
import { color, orientation, size } from '../utils.js'
export default {
  name: 'Typography',
  component: Typography,
  title: '内容',
  icon: 'icons/typography.svg',
  type: 'react',
  width: 260,
  height: 36,
  props: [
    string('text', '内容', '这里是一段文本'),
    select('variant', '段落类型', ['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2'], 'body1'),
    radiogroup('align', '对齐', [{
      label: '左',
      value: 'left'
    }, {
      label: '中',
      value: 'center'
    }, {
      label: '右',
      value: 'right'
    }]),
    boolean('noWrap', '单行', false),
    {
      name: 'color',
      label: '颜色',
      type: 'color',
      connect: true,
      value: '#212529'
    }
  ],
  events: [onChange]
}
