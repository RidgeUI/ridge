import BaseHighCharts from '../utils/BaseHightChart'

class LineChart extends BaseHighCharts {
  getChartOptions () {
    const { isArea } = this.props
    return {
      chart: {
        type: isArea ? 'area' : 'line'
      },
      series: this.props.data.series
    }
  }
}

export default LineChart
