import { radiogroup, select, string } from 'ridge-build/src/props'
import JSEditor from './JSEditor'
import { theme } from '../props'

export default {
  name: 'javascript',
  component: JSEditor,
  title: 'JS',
  type: 'react',
  icon: 'icons/javascript.svg',
  props: [
    radiogroup('type', '类型', [{
      label: 'js',
      value: 'javascript'
    }, {
      label: 'css',
      value: 'css'
    }, {
      label: 'json',
      value: 'json'
    }, {
      label: 'md',
      value: 'markdown'
    }]),
    string('text', '代码内容', 'const name="Ridge"', true),
    theme
  ],
  width: 600,
  height: 400
}
