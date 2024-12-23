import BaseHighCharts from '../utils/BaseHightChart'
class Column extends BaseHighCharts {
  getChartOptions () {
    const { data } = this.props
    return {
      chart: {
        type: 'column'
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false
      },
      legend: {
        enabled: false
      },
      series: [data.series[0]]
    }
  }
}

export default Column
