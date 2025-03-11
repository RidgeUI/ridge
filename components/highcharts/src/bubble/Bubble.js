import BaseHighCharts from '../utils/BaseHightChart'

class DonutChart extends BaseHighCharts {
  getChartOptions () {
    const {
      data = []
    } = this.props

    const series = [{
      name: data.series[0].name,
      data: data.series[0].data.map((value, i) => {
        return {
          name: data.categories[i],
          value
        }
      })
    }]
    return {
      chart: {
        type: 'packedbubble',
        height: '100%'
      },
      plotOptions: {
        packedbubble: {
          minSize: '30%',
          maxSize: '120%',
          layoutAlgorithm: {
            splitSeries: false,
            gravitationalConstant: 0.02
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            style: {
              color: 'black',
              textOutline: 'none',
              fontWeight: 'normal'
            }
          }
        }
      },
      series
    }
  }
}
export default DonutChart
