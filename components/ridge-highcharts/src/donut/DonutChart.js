import BaseHighCharts from '../utils/BaseHightChart'

class DonutChart extends BaseHighCharts {
  getChartOptions () {
    const {
      innerSize = 75,
      showLabel,
      data = []
    } = this.props

    const series = [{
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
          innerSize: innerSize + '%',
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: showLabel
          }
        }
      },
      series
    }
  }
}
export default DonutChart
