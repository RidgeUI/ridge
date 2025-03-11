import { json, optionConfig, radiogroup, string } from 'ridge-build/src/props.js'
import Table from './Table.jsx'
export default {
  name: 'Table',
  title: '表格',
  component: Table,
  icon: 'icons/table.svg',
  type: 'react',
  props: [
    json('dataSource', '数据', [
      {
        name: 'Semi Design 设计稿.fig',
        size: '2M',
        owner: '姜鹏志',
        updateTime: '2020-02-02 05:13'
      },
      {
        name: 'Semi Design 分享演示文稿',
        size: '2M',
        owner: '郝宣',
        updateTime: '2020-01-17 05:31'
      },
      {
        name: '设计文档',
        size: '34KB',
        owner: 'Zoey Edwards',
        updateTime: '2020-01-26 11:01'
      }
    ], true),
    optionConfig('columns', '列配置', [{
      label: '文件名',
      value: 'name'
    }, {
      label: '大小',
      value: 'size'
    }, {
      label: '作者',
      value: 'owner'
    }, {
      label: '更新时间',
      value: 'updateTime'
    }]),
    radiogroup('size', '尺寸', [{
      label: '默认',
      value: 'default'
    }, {
      label: '中等',
      value: 'middle'
    }, {
      label: '小',
      value: 'small'
    }]),
    string('rowKey', '行键', 'value')
  ],
  events: [{
    name: 'selectionChanged',
    desc: '选择变化',
    args: ['selectedRowKeys', 'selectedRows']
  }],
  width: 300,
  height: 52
}
