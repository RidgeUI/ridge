import BaseHighCharts from '../utils/BaseHightChart'

class SingleArea extends BaseHighCharts {
  getChartOptions () {
    const {
      isArea,
      data = { series: [] }
    } = this.props

    let max = null
    try {
      max = (data.series[0].data ?? []).length - 1.5
    } catch (e) {}
    return {
      chart: {
        type: isArea ? 'areaspline' : 'spline',
        margin: [0, 0, 0, 0]
      },
      xAxis: {
        min: 0.5,
        max,
        visible: false
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          },
          line: {
            smoothing: 0.5 // 举例，可以根据需要调整
          }
        }
      },
      yAxis: {
        offset: 0,
        visible: false
      },
      legend: {
        enabled: false
      },
      series: [data.series[0]]
    }
  }
}

export default SingleArea
