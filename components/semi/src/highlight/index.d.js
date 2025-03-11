import Highlight from './Highlight.jsx'
import { string, json } from 'ridge-build/src/props.js'
export default {
  name: 'highlight',
  title: '高亮文本',
  component: Highlight,
  icon: 'icons/highlight.svg',
  type: 'react',
  props: [
    string('sourceString', '源文本', '锐制(Ridge)是一个高效的界面开发工具，可以帮助您快速通过拖拽方式制作页面。'),
    json('searchWords', '高亮文本', ['高效', '快速'])
  ],
  width: 300,
  height: 40

}
