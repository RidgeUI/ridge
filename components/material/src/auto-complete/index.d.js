import { array, value, string } from 'ridge-build/src/props.js'
import { size } from '../utils.js'
import AutoComplete from './AutoComplete.jsx'

export default {
  name: 'AutoComplete',
  icon: 'icons/autocomplete.svg',
  component: AutoComplete,
  type: 'react',
  title: '自动完成',
  width: 260,
  height: 40,
  props: [
    value(),
    array('options', '候选数据', []),
    size,
    string('placeholder', '空白提示', '请输入查询条件....')
  ]
}
