import GeoMapChart from './GeoMapChart'
export default {
  name: 'GeoMapChart',
  title: '地图',
  component: GeoMapChart,
  icon: 'icons/LineiconsMap.svg',
  type: 'vanilla',
  props: [{
    name: 'seriesData',
    label: '数据',
    connect: true,
    type: 'json',
    value: []
  }, {
    name: 'geourl',
    label: '地理JSON文件',
    type: 'file'
  }],
  events: [{
    name: 'featureReady',
    label: '区域读取'
  }],
  width: 540,
  height: 480
}
