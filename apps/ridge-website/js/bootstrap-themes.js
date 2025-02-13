export default {
  name: 'BootStrapThemes',
  events: [{
    name: 'darkChange',
    label: '黑白切换'
  }],
  state: {
    isDark: false, // 暗色模式
    themes: [{ // 配色选项
      label: '默认',
      value: '/npm/bootstrap/dist/css/bootstrap.min.css'
    }, {
      label: 'journal',
      value: '/npm/bootswatch/dist/journal/bootstrap.min.css',
    }, {
      label: 'lumen',
      value: '/npm/bootswatch/dist/lumen/bootstrap.min.css'
    },{ 
      label: 'minty',
      value: '/npm/bootswatch/dist/minty/bootstrap.min.css'
    },{
      label: 'pulse',
      value: '/npm/bootswatch/dist/pulse/bootstrap.min.css'
    }, {
      label: 'sandstone',
      value: '/npm/bootswatch/dist/sandstone/bootstrap.min.css'
    }, {
      label: 'cerulean',
      value: '/npm/bootswatch/dist/cerulean/bootstrap.min.css'
    }]
  },

  async setup () {
    if (localStorage.getItem("data-bs-theme") === 'dark') {
      document.querySelector('html').setAttribute("data-bs-theme", 'dark')
      this.isDark = true
    }
    if (localStorage.getItem('data-bs-color')) {
      this.setTheme(localStorage.getItem('data-bs-color'))
    }
  },

  destory () {
  },

  watch: {
    isDark () {
      this.toggleColorMode()
    }
  },

  actions: {
    _removeCss (contains) {
      const links = Array.from(document.head.children).filter(node => node.tagName.toLowerCase() === 'link')
      for (const link of links) {
        if (link.href.indexOf(contains) > -1) {
          document.head.removeChild(link)
        }
      }
    },

    async _loadCss (href) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.type = 'text/css'
      link.href = href
      document.getElementsByTagName('HEAD')[0].appendChild(link)
    },

    setTheme(themeValue) { // 设置配色
      this._removeCss('bootstrap.min.css')
      this._loadCss(themeValue)
      localStorage.setItem('data-bs-color', themeValue)
    },
    toggleColorMode () {  // 切换黑白
      if (this.isDark) {
        document.querySelector('html').setAttribute("data-bs-theme", 'dark')
        localStorage.setItem("data-bs-theme", 'dark')
        this.emit('darkChange', 'dark')
      } else {
        document.querySelector('html').setAttribute("data-bs-theme", 'light')
        localStorage.setItem("data-bs-theme", 'light')
        this.emit('darkChange', 'light')
      }
    }
  }
}
