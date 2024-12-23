import Title from './Title.jsx'
import { size, type } from '../props'
import { string, radiogroup } from 'ridge-build/src/props.js'
export default {
  name: 'title',
  title: '标题',
  component: Title,
  icon: 'icons/typography.svg',
  type: 'react',
  props: [
    string('text', '内容', '标题'),
    radiogroup('heading', '标题级别', [1, 2, 3, 4, 5, 6].map(n => {
      return {
        label: n, value: n
      }
    }))
  ],
  width: 300,
  height: 40

}
