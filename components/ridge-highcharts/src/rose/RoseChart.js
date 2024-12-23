import BaseHighCharts from '../utils/BaseHightChart'
class ColumnMixSpineChart extends BaseHighCharts {
  getChartOptions () {
    const {
      data,
      showLabel
    } = this.props

    return {
      chart: {
        type: 'variablepie'
      },
      plotOptions: {
        variablepie: {
          dataLabels: {
            enabled: showLabel
          },
          allowPointSelect: true
        }
      },
      series: [{
        name: data.series[0].name,
        minPointSize: 10,
        innerSize: '0%',
        zMin: 0,
        borderRadius: 5,
        data: data.series[0].data.map((value, i) => {
          return {
            name: data.categories[i],
            y: value,
            z: 90 + (i * 30)
          }
        })
      }]
    }
  }
}

export default ColumnMixSpineChart
