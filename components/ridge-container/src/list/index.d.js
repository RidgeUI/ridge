import ListContainer from './ListContainer'
export default {
  name: 'list-container',
  component: ListContainer,
  title: '列表容器',
  icon: 'icons/list.svg',
  type: 'vanilla',
  props: [{
    name: 'dataSource',
    label: '数据',
    type: 'array',
    connect: true,
    control: 'json',
    value: []
  }, {
    name: 'selected',
    label: '选中项',
    type: 'array',
    connect: true,
    control: 'json',
    value: []
  }, {
    name: 'template',
    label: '单项模板',
    resizable: true,
    type: 'slot'
  }, {
    label: '间隔',
    name: 'gap',
    width: '50%',
    type: 'number',
    value: 4
  }, {
    label: '内边距',
    name: 'padding',
    width: '50%',
    type: 'number',
    value: 4
  }, {
    name: 'layout',
    label: '模式',
    type: 'string',
    control: 'select',
    options: [{
      label: '纵向排列',
      value: 'list'
    }, {
      label: '单行排列',
      value: 'line'
    }, {
      label: '多行排列',
      value: 'flex'
    }, {
      label: '栅格排列',
      value: 'grid'
    }],
    value: 'list'
  }, {
    name: 'fixedHeight',
    label: '固定高度',
    hidden: ({ props }) => props && props.layout !== 'list',
    type: 'boolean',
    value: true
  }, {
    name: 'fixedWidth',
    label: '固定宽度',
    hidden: ({ props }) => props && props.layout !== 'line',
    type: 'boolean',
    value: true
  }, {
    name: 'fixed',
    label: '固定宽高',
    hidden: ({ props }) => props && props.layout !== 'flex',
    type: 'boolean',
    value: true
  }, {
    name: 'columns',
    hidden: ({ props }) => props && props.layout !== 'grid',
    label: '列数',
    type: 'number',
    value: 3
  }, {
    name: 'rows',
    hidden: ({ props }) => props && props.layout !== 'grid',
    label: '行数',
    type: 'number',
    value: 3
  }, {
    name: 'classNames',
    label: '整体样式',
    type: 'style',
    value: []
  }, {
    name: 'itemClassNames',
    label: '单项样式',
    type: 'style',
    value: []
  }, {
    name: 'selectedClassNames',
    label: '选中样式',
    type: 'style',
    value: []
  }],
  childProps: [{
    label: 'W',
    width: '50%',
    control: 'number',
    field: 'style.width',
    fieldEx: 'styleEx.width'
  }, {
    label: 'H',
    width: '50%',
    control: 'number',
    field: 'style.height',
    fieldEx: 'styleEx.height'
  }],
  events: [{
    name: 'onItemClick',
    label: '单项点击'
  }],
  width: 420,
  height: 360
}
