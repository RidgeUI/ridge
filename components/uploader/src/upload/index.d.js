import Upload from './Upload.jsx'
import { boolean, string, number, value, onChange, slot, children } from 'ridge-build/src/props.js'
export default {
  name: 'upload',
  title: '上传',
  component: Upload,
  icon: 'icons/upload.svg',
  type: 'react',
  props: [
    value('array', '已选', []),
    boolean('draggable', '可拖拽', false),
    string('btnText', '按钮文本', '点击上传'),
    string('fileLimit', '文件类型', ''),
    number('maxSize', '最大(MB)', 10),
    boolean('multiple', '可多选', true),
    slot('renderContent', '自定义内容'),
    boolean('directory', '上传文件夹', false)
  ],
  events: [onChange],
  width: 300,
  height: 40

}
