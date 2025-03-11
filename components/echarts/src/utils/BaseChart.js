class BaseChart {
  constructor (props) {
    this.props = props || {}
  }

  getChartOptions () {

  }

  mount (el) {
    const { echarts, ResizeObserver } = window
    this.el = el
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.chartInstance && this.chartInstance.resize()
      }
    })
    resizeObserver.observe(this.el)

    if (!echarts) {
      console.log('no echarts loaded')
    }
    this.chartInstance = echarts.init(this.el)

    // 增加对数据预加载的判断，一些类似地图数据可能要根据属性json去进一步加载
    if (this.preload) {
      this.preload().then(() => {
        this.update()
      })
    } else {
      this.update()
    }
  }

  update (props) {
    if (props) {
      this.props = props
    }
    if (this.chartInstance) {
      const chartOptions = this.getChartOptions()
      if (this.props.legend) {
        chartOptions.legend = {
          show: true
        }
      } else {
        chartOptions.legend = {
          show: false
        }
      }

      if (chartOptions.xAxis) {
        chartOptions.xAxis.axisLabel = {
          interval: 0
        }
      }
      this.chartInstance.setOption(chartOptions)
    }
    if (this.props.loading) {
      this.chartInstance.showLoading()
    } else {
      this.chartInstance.hideLoading()
    }
  }
}
export default BaseChart
