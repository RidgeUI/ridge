import Steps from './Steps.jsx'
export default {
  name: 'steps',
  title: '步骤条',
  description: '引导用户按照流程完成任务的导航条',
  icon: 'icons/step.svg',
  component: Steps,
  props: [{
    name: 'value',
    label: '当前步骤',
    type: 'number',
    connect: true,
    value: 1
  }, {
    name: 'items',
    label: '步骤项',
    type: 'object',
    value: [
      {
        title: '基础信息',
        description: '当任务复杂或者存在'
      },
      {
        title: '扩展信息',
        description: '分解成一系列步骤',
        subTitle: 'Left 00:00'
      },
      {
        title: '完成',
        description: '从而简化任务'
      }
    ]
  }, {
    name: 'size',
    label: '尺寸',
    type: 'string',
    control: 'radiogroup',
    width: '50%',
    options: [{
      label: '小',
      value: 'small'
    }, {
      label: '正常',
      value: 'default'
    }],
    value: 'default'
  }, {
    name: 'direction',
    label: '方向',
    type: 'string',
    control: 'radiogroup',
    width: '50%',
    options: [{
      label: '横向',
      value: 'horizontal'
    }, {
      label: '纵向',
      value: 'vertical'
    }],
    value: 'horizontal'
  }, {
    name: 'type',
    label: '样式',
    type: 'string',
    control: 'radiogroup',
    options: [{
      label: '默认',
      value: 'default'
    }, {
      label: '导航',
      value: 'navigation'
    }, {
      label: '内联',
      value: 'inline'
    }],
    value: 'default'
  }, {
    name: 'status',
    label: '状态',
    type: 'string',
    control: 'radiogroup',
    options: [{
      label: '处理中',
      value: 'process'
    }, {
      label: '等待',
      value: 'wait'
    }, {
      label: '完成',
      value: 'finish'
    }, {
      label: '失败',
      value: 'error'
    }],
    value: 'process'
  }],
  events: [{
    name: 'input',
    label: '步骤改变'
  }],
  externals: ['index.umd.min.js'],
  width: 680,
  height: 60
}
