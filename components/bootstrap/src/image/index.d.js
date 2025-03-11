import Image from './Image.jsx'
import { image, classList, objectFit } from 'ridge-build/src/props.js'
export default {
  name: 'Image',
  title: '图片',
  component: Image,
  icon: 'bi bi-image',
  type: 'react',
  props: [
    objectFit,
    image(),
    classList()
  ],
  events: [{
    label: '点击事件',
    name: 'onClick'
  }],
  width: 120,
  height: 36
}
