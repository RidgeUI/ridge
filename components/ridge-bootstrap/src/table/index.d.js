import Table from './Table.jsx'
import { boolean, string, icon, classList, json, optionConfig } from 'ridge-build/src/props.js'
export default {
  name: 'table',
  component: Table,
  title: '表格',
  icon: 'bi bi-table',
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
    boolean('showLineNumber', '显示序号', true)
  ],
  events: [{
    label: '点击',
    name: 'onClick'
  }],
  width: 44,
  height: 20
}
