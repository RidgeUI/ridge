import BaseChart from '../utils/BaseChart'

const { echarts } = window

class GeoMapChart extends BaseChart {
  async preload () {
    if (this.props.geourl) {
      const res = await fetch(this.props.geourl)
      const json = await res.json()
      echarts.registerMap(this.props.geourl, json)

      if (json.features) { // 提取json中的区域名称列表返回
        const fetureData = json.features.map(fet => {
          if (fet.type === 'Feature' && fet.properties && fet.properties.name) {
            return fet.properties.name
          } else {
            return null
          }
        }).filter(t => t)
        this.props.featureReady && this.props.featureReady(fetureData)
      }
    }
  }

  getChartOptions () {
    const { seriesData } = this.props

    const series = []

    if (this.props.geourl) {
      series.push({
        name: 'Map',
        type: 'map',
        roam: true,
        map: this.props.geourl ?? null,
        label: {
          show: true
        },
        emphasis: {
          label: {
            show: true
          }
        },
        data: seriesData
      })
    }
    return {
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2
      },
      visualMap: {
        disabled: true,
        min: 0,
        max: 100,
        realtime: false,
        show: false,
        calculable: false,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      series
    }
  }
}

export default GeoMapChart
