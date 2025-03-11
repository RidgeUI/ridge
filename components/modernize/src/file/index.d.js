import FileInput from './FileInput.jsx'
import { radiogroup } from 'ridge-build/src/props.js'
import { size } from '../props.js'
export default {
  name: 'TextInput',
  title: '文件选择',
  component: FileInput,
  icon: 'bi bi-file-earmark',
  type: 'react',
  props: [
    radiogroup('size', '尺寸', size, 'normal', false)
  ],
  events: [{
    label: '点击事件',
    name: 'onClick'
  }],
  width: 240,
  height: 36
}
