import Cropper from './Cropper.jsx'
import { boolean, classList, number, file } from 'ridge-build/src/props.js'
export default {
  name: 'Cropper',
  title: '裁切器',
  component: Cropper,
  icon: 'icons/cropper.svg',
  type: 'react',
  props: [
    file('src', '图片'),
    number('outputWidth', '输出宽度', 100),
    number('outputHeight', '输出高度', 100),
    number('aspectRatio', '宽高比', 1)
  ],
  events: [{
    label: '数据变化',
    name: 'blobChange'
  }],
  width: 300,
  height: 40
}
