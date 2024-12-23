import Marked from './Marked.js'
export default {
  name: 'Marked',
  component: Marked,
  title: 'MarkDown',
  icon: 'icons/logo-black.svg',
  type: 'react',
  props: [{
    name: 'mdfile',
    label: 'md文件',
    type: 'file',
    fileType: 'markdown',
    connect: true
  }],
  events: [],
  width: 480,
  height: 64
}
