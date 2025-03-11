import Upload from './Upload.jsx'
import { icon } from '../props.js'
import { boolean, radiogroup, string, number, image, value, onChange } from 'ridge-build/src/props.js'
export default {
  name: 'upload',
  title: '上传',
  component: Upload,
  icon: 'icons/upload.svg',
  type: 'react',
  props: [
    value('array', '已选', []),
    radiogroup('type', '样式', [{
      label: '按钮',
      value: 'button'
    }, {
      label: '头像',
      value: 'avatar'
    }, {
      label: '图片',
      value: 'picture'
    }, {
      label: '拖拽',
      value: 'draggable'
    }], 'button'),
    icon,
    image('url', '图片地址', ''),
    string('btnText', '按钮文本', '点击上传'),
    string('fileLimit', '文件类型', ''),
    number('maxSize', '最大(MB)', 10),
    boolean('multiple', '可多选', true),
    boolean('directory', '按目录', false)
  ],
  events: [onChange],
  width: 300,
  height: 40

}
