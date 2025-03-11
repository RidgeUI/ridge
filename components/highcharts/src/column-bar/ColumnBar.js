import BaseHighCharts from '../utils/BaseHightChart'
class BarChart extends BaseHighCharts {
  getChartOptions () {
    return {
      chart: {
        type: 'bar'
      },
      yAxis: {
        visible: false
      },
      legend: {
        enabled: false
      },
      series: this.props.data.series
    }
  }
}

export default BarChart
