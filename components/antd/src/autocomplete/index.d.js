import AutoComplete from './AutoComplete'

export default {
  name: 'autocomplete',
  title: '自动完成',
  icon: 'icons/autocomplete.svg',
  description: '提供输入建议/辅助提示功能的输入框',
  component: AutoComplete,
  props: [{
    name: 'value',
    label: '内容',
    type: 'string',
    connect: true
  }, {
    name: 'options',
    label: '可选项',
    type: 'object',
    connect: true,
    value: [{
      value: '熊猫为什么爱吃竹子'
    }, {
      value: '熊猫掰竹子为什么呲牙咧嘴'
    }, {
      value: '三太子为什么深受喜爱'
    }, ]
  }],
  events: [{
    name: 'input'
  }],
  width: 240,
  height: 32
}
