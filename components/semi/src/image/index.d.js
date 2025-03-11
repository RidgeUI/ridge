import Image from './Image.jsx'
import { boolean, classList, image, onClick } from 'ridge-build/src/props.js'
export default {
  name: 'image',
  title: '图片',
  component: Image,
  icon: 'icons/image.svg',
  type: 'react',
  props: [
    image(),
    boolean('preview', '点击预览', true),
    classList()
  ],
  events: [onClick],
  width: 300,
  height: 40
}
