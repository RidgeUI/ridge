import { value, json, boolean, number, string, onChange } from 'ridge-build/src/props.js'
import Cascader from './Cascader.jsx'
import { size } from '../props.js'

export default {
  name: 'Cascader',
  component: Cascader,
  title: '级联选择',
  icon: 'icons/cascader.svg',
  type: 'react',
  width: 260,
  height: 40,
  props: [
    value(),
    json('treeData', '待选数据', [
      {
        label: '浙江省',
        value: 'zhejiang',
        children: [
          {
            label: '杭州市',
            value: 'hangzhou',
            children: [
              {
                label: '西湖区',
                value: 'xihu'
              },
              {
                label: '萧山区',
                value: 'xiaoshan'
              }
            ]
          },
          {
            label: '宁波市',
            value: 'ningbo'
          }
        ]
      }
    ]),
    boolean('filterTreeNode', '过滤', true),
    boolean('multiple', '多选', false),
    boolean('disabled', '禁用', false),
    number('maxTagCount', '显示数量', 4),
    size,
    string('separator', '分隔符', '/'),
    string('placeholder', '暗提示', '请选择...')
  ],
  events: [
    onChange
  ]
}
