import BaseHighCharts from '../utils/BaseHightChart'
class Column extends BaseHighCharts {
  getChartOptions () {
    return {
      chart: {
        type: 'column'
      },
      series: this.props.data.series
    }
  }
}

export default Column
