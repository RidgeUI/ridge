import BaseHighCharts from '../utils/BaseHightChart'
class PieChart extends BaseHighCharts {
  getChartOptions () {
    const {
      data,
      showLabel
    } = this.props

    const series = [{
      name: data.series[0].name,
      data: data.series[0].data.map((value, i) => {
        return {
          name: data.categories[i],
          y: value
        }
      })
    }]
    return {
      chart: {
        type: 'pie'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          dataLabels: {
            enabled: showLabel
          }
        }
      },
      series
    }
  }
}

export default PieChart
