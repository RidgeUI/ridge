import BaseHighCharts from '../utils/BaseHightChart'
class Column extends BaseHighCharts {
  getChartOptions () {
    const { data } = this.props
    return {
      chart: {
        type: 'column',
        polar: true
      },
      xAxis: {
        categories: data.categories
      },
      series: this.props.data.series
    }
  }
}

export default Column
