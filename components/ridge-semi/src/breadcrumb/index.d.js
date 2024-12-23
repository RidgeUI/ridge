import Breadcrumb from './Breadcrumb.jsx'
import { boolean, optionConfig, string, onChange } from 'ridge-build/src/props.js'
export default {
  name: 'breadcrumb',
  title: '路径导航',
  component: Breadcrumb,
  icon: 'icons/breadcrumb.svg',
  type: 'react',
  props: [
    optionConfig('paths', '路径列表'),
    string('separator', '分隔符', '/'),
    boolean('compact', '小尺寸', false)
  ],
  events: [
    onChange
  ],
  width: 300,
  height: 40

}
