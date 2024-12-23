import ListContainer from './ListContainer'
export default {
  name: 'list-container',
  component: ListContainer,
  title: '列表容器',
  // description: '适用于对列表项内容进行展示的场合，例如商品列表、文件列表等。 对于循环展示的内容，需要提供一个单独的列表项模板，每个项目按模板的内容进行展示',
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
      label: '竖行',
      value: 'list'
    }, {
      label: '横排/换行',
      value: 'flex'
    }, {
      label: '格子',
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
    value: 2
  }, {
    name: 'rows',
    hidden: ({ props }) => props && props.layout !== 'grid',
    label: '行数',
    type: 'number',
    value: 5
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
