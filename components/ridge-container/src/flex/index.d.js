import FlexBoxContainer from './FlexContainer'
import { boolean, classList } from 'ridge-build/src/props'

export default {
  name: 'flex-container',
  component: FlexBoxContainer,
  title: '弹性容器',
  // description: `适合多个内容进行垂直或水平形式按比例排列场景。排列可以支持左右或者上下对齐，拉伸、居中等。
  // 因为弹性容器可以嵌套使用，能实现很多复杂的功能，因此无论在页面整体布局还是局部上都得到广泛应用。
  // 另外因为"弹性"的性质，弹性容器也可以满足"自适应"的布局诉求`,
  type: 'vanilla',
  icon: 'icons/flex.svg',
  props: [{
    name: 'direction',
    label: '排列方向',
    type: 'string',
    control: 'radiogroup',
    optionList: [{
      label: '横向',
      value: 'row'
    }, {
      label: '纵向',
      value: 'column'
    }],
    value: 'row'
  }, {
    name: 'justify',
    label: '排列对齐',
    type: 'string',
    control: 'radiogroup',
    optionList: [{
      label: '开始',
      value: 'flex-start'
    }, {
      label: '正中',
      value: 'center'
    }, {
      label: '结束',
      value: 'flex-end'
    }, {
      label: '两边',
      value: 'space-between'
    }, {
      label: '均匀',
      value: 'space-evenly'
    }],
    value: 'flex-start'
  }, {
    name: 'alignItems',
    label: '交叉对齐',
    type: 'string',
    control: 'radiogroup',
    optionList: [{
      label: '起点',
      value: 'flex-start'
    }, {
      label: '正中',
      value: 'center'
    }, {
      label: '填充',
      value: 'stretch'
    },
    {
      label: '终点',
      value: 'flex-end'
    }],
    value: 'flex-start'
  },
  boolean('flexWrap', '换行', false),
  boolean('fill', '填满区域', false),
  {
    name: 'children',
    hidden: true,
    type: 'children'
  }, {
    label: '间隔',
    name: 'gap',
    width: '50%',
    type: 'number',
    value: 8
  }, {
    label: '内间距',
    name: 'padding',
    width: '50%',
    type: 'number',
    value: 8
  }, classList()],
  childProps: [{
    label: '宽度',
    width: '50%',
    control: 'number',
    field: 'style.width',
    fieldEx: 'styleEx.width'
  }, {
    label: '高度',
    width: '50%',
    control: 'number',
    field: 'style.height',
    fieldEx: 'styleEx.height'
  }, {
    label: '自动宽高',
    width: '50%',
    control: 'boolean',
    field: 'style.autoSize'
  }, {
    field: 'style.visible',
    label: '可见',
    type: 'boolean',
    fieldEx: 'styleEx.visible',
    width: '50%'
  }, {
    field: 'style.flex',
    label: '弹性',
    type: 'string',
    width: '50%'
  }],
  fullScreenable: true,
  width: 360,
  height: 240
}
