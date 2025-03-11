import BaseHighCharts from '../utils/BaseHightChart'

/**
 * 混合图：第一条为线，其他为柱状图
 */
class Combinations extends BaseHighCharts {
  getChartOptions () {
    const {
      data = []
    } = this.props

    const series = data.series.map((serie, i) => {
      return Object.assign({}, serie, {
        type: i === 0 ? 'line' : 'column'
      })
    })
    return {
      series
    }
  }
}

export default Combinations
