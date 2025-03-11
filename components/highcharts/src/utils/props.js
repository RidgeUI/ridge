const chartData = {
  label: '数据',
  name: 'data',
  type: 'json',
  value: {
    categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
    series: [
      {
        name: 'Corn',
        data: [406292, 260000, 107000, 68300, 27500, 14500]
      },
      {
        name: 'Wheat',
        data: [51086, 136000, 5500, 141000, 107180, 77000]
      }
    ]
  },
  connect: true
}

const data = {
  label: '数据',
  name: 'data',
  type: 'json',
  value: [
    ['中国', '美国', '印度', '俄罗斯', '巴西'],
    [63, 45, 35, 11.5, 11.2],
    [68, 57, 31, 13, 11.9]
  ],
  connect: true
}

const singleData = {
  label: '数据',
  name: 'data',
  type: 'json',
  value: [
    [63, 45, 35, 11.5, 11.2, 8.7, 8.5, 7.4, 6.6, 6.2]
  ]
}

const timeInterval = {
  label: '时间间隔',
  name: 'timeInterval',
  type: 'number',
  value: 5 * 60 * 1000
}

const customize = {
  label: '其他属性',
  name: 'customize',
  type: 'json'
}

const theme = {
  label: '主题',
  name: 'colorScheme',
  type: 'string',
  control: 'select',
  connect: true,
  options: [{
    label: '默认',
    value: 'default'
  }, {
    label: 'avocodo',
    value: 'avocodo'
  }, {
    label: 'brandLight',
    value: 'brandLight'
  }, {
    label: 'darkBlud',
    value: 'darkBlue'
  }]
}

const axisColor = {
  label: '坐标轴色',
  name: 'axisColor',
  type: 'color'
}

const labelColor = {
  label: '标记色',
  name: 'labelColor',
  type: 'color'
}

const seriesNames = {
  label: '系列名称',
  name: 'seriesNames',
  item: '系列',
  type: 'array',
  value: ['粮食产量']
}

const yFormat = {
  label: '格式',
  name: 'yFormat',
  type: 'string',
  value: '{value}'
}
export {
  chartData,
  theme,
  data,
  singleData,
  yFormat,
  timeInterval,
  customize,
  seriesNames,
  axisColor,
  labelColor
}
