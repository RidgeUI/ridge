import { deepmerge } from './deepmerge'

import brandLight from './theme/brand-light'
import darkBlue from './theme/dark-blue'
import avocodo from './theme/avocodo'

const themes = {
  default: {},
  brandLight,
  darkBlue,
  avocodo
}
class BaseHighCharts {
  constructor (props) {
    this.props = props ?? {}
  }

  getSeries (dataIndex = 1) {
    const {
      seriesNames = [],
      data = []
    } = this.props

    return data.slice(dataIndex).map((d, i) => {
      return {
        name: seriesNames[i] ?? '',
        data: d
      }
    })
  }

  getMaxData () {
    const {
      data = []
    } = this.props

    let max = 0

    for (const ar of data) {
      for (const n of ar) {
        if (parseInt(n) && parseInt(n) > max) {
          max = parseInt(n)
        }
      }
    }
    return max
  }

  getAxis () {
    const { data, showXLabel = true } = this.props
    const xAxis = {
      categories: data[0],
      visible: true
    }
    return showXLabel
      ? xAxis
      : {
          visible: false
        }
  }

  getBasicOptions () {
    const { data = { }, colorScheme = {} } = this.props

    let chartTheme = {}
    if (colorScheme) {
      chartTheme = themes[colorScheme] ?? {}
    }
    return {
      ...chartTheme,
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },
      chart: {
        backgroundColor: 'transparent'
      },
      legend: {
        enabled: true
      },
      xAxis: {
        categories: data.categories
      }
      // plotOptions: {
      //   column: {
      //     borderRadius: 3
      //   },
      //   series: {
      //     borderWidth: 0,
      //     marker: {
      //       enabled: false
      //     }
      //   }
      // },
      // yAxis: {
      //   min: 0,
      //   gridLineDashStyle: 'dash',
      //   title: {
      //     text: ''
      //   }
      // },
      // xAxis: {
      //   categories: data.categories ?? null,
      //   lineWidth: xAxisLine ? 1 : 0
      // }
    }
  }

  getChartOptions () {}

  mount (el) {
    this.el = el
    this.update()
  }

  getChartMethod () {
    const { Highcharts } = window

    return Highcharts.chart
  }

  update (props) {
    if (props) {
      this.props = props
    }
    const opt = this.getChartOptions()

    const merged = deepmerge(this.getBasicOptions(), opt)

    if (this.chart) {
      this.chart.update(merged, true, false, false)
      this.chart.reflow()
    } else {
      this.chart = this.getChartMethod()(this.el, merged)
    }
  }
}
export default BaseHighCharts
