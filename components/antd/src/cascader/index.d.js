import Cascader from './Cascader.jsx'

export default {
  name: 'cascader',
  title: '级联选择',
  icon: 'icons/cascader.svg',
  description: '从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择，例如省市区，公司层级，事物分类等。比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验',
  component: Cascader,
  props: [{
    name: 'value',
    label: '选中',
    type: 'string',
    connect: true
  }, {
    name: 'options',
    label: '选项',
    type: 'object',
    connect: true,
    value: [
      {
        value: 'beijing',
        label: '北京',
        children: [
          {
            value: 'tongzhou',
            label: '通州',
            children: [
              {
                value: 'mjq',
                label: '马驹桥'
              },
              {
                value: 'xiji',
                label: '西集'
              }
            ]
          }
        ]
      },
      {
        value: 'hebei',
        label: '河北',
        children: [
          {
            value: 'shijz',
            label: '石家庄',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
              }
            ]
          }
        ]
      }
    ]
  }, {
    name: 'size',
    type: 'string',
    value: 'default',
    type: 'radiogroup',
    options: [{
      label: '小',
      value: 'small'
    }, {
      label: '正常',
      value: 'normal'
    }, {
      label: '大',
      value: 'large'
    }]
  }],
  width: 240,
  height: 32
}
