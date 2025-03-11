import Cropper from './Cropper.jsx'
import { file, number } from 'ridge-build/src/props.js'
export default {
  name: 'Cropper',
  component: Cropper,
  title: '截图',
  icon: 'icons/BxCrop.svg',
  type: 'react',
  props: [
    file('src', '图片'),
    number('outputWidth', '输出宽度', 100),
    number('outputHeight', '输出高度', 100),
    {
      name: 'aspectRatio',
      label: '宽高比',
      type: 'number',
      value: 1
    }
  ],
  events: [{
    label: '数据变化',
    name: 'blobChange'
  }],
  width: 160,
  height: 160
}
