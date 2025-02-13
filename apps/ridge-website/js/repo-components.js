export default {
  name: 'RepoComponents',
  properties: [{
    label: '类型',
    name: 'type',
    type: 'string'
  }],
  externals: {
    axios: 'axios/dist/axios.min.js'
  },
  state: {
    packageList: [], // 组件包列表
    installVisible: false // 安装按钮可见性
  },

  computed: {
    itemPackageName (scope) { // 单项-包名称
      return scope.item.name
    },
    itemPackageIcon (scope) { // 单项-包图片
      return `${scope.item.name}/${scope.item.icon}`
    },
    itemPackageCover (scope) { // 单项-包图片
      return `${scope.item.name}/${scope.item.cover||'cover.png'}`
    },
    itemPackageVersion (scope) { // 单项-包最新版本
      return scope.item.version
    },
    itemPackageDesc (scope) { // 单项-包描述
      return scope.item.description
    },
    itemPackageAuthor (scope) { // 单项-包作者
      return scope.item.author?.name
    },
    itemPackageInstalled (scope) { // 单项-是否已安装
      return scope.item.installed
    },
    itemPackageShowInstallBtn (scope) { // 单项-显示安装按钮
      return !scope.item.installed
    },
    itemPackageActionLayer (scope) { // 单项-操作层索引
      return scope.item.actionState
    }
  },

  async setup () {
    this.axios.defaults.withCredentials = true
    
    this.fetchComponentPackages()

    this.appService = this.composite.context.services.appService

    if (this.appService) {
      this.installVisible = true
    }
  },

  destory () {
  },

  watch: {
  },

  actions: {
    async fetchComponentPackages () {
      let packageList = []
      try {
        const resp = (await this.axios.get(`/api/repo/query?type=${this.properties.type}`)).data
        packageList = resp.data
      } catch (e) {
         
      }
      if (this.appService && packageList.length) {
        const packageJSONObject = await this.appService.getPackageJSONObject()
        this.packageList = packageList.map(pkg => {
          if (packageJSONObject.dependencies && packageJSONObject.dependencies[pkg.name]) {
              pkg.installed = true
              pkg.actionState = 1
          } else {
              pkg.installed = false
              pkg.actionState = 0
          }
          return pkg
        })
      } else {
        this.packageList = packageList
      }        
    },

    async installPackage (scope) { // 安装组件包
      const packageJSONObject = await this.appService.getPackageJSONObject()
      packageJSONObject.dependencies[scope.item.name] = '^' + scope.item.version

      await this.appService.savePackageJSONObject(packageJSONObject)

      this.fetchComponentPackages()
    },
    changeName () { // 改名
      this.state.name = 'VisionFlow'
    }
  }
}
