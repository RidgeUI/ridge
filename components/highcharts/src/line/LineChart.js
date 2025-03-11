import BaseHighCharts from '../utils/BaseHightChart'

class LineChart extends BaseHighCharts {
  getChartOptions () {
    const { isArea } = this.props
    return {
      chart: {
        type: isArea ? 'area' : 'line'
      },
      categories: this.props.data.categories,
      series: this.props.data.series
    }
  }
}

export default LineChart
