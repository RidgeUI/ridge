export default {
  name: 'RidgeAppConfig',
  properties: [{
    name: 'packageObject',
    label: '包对象',
    type: 'object'
  }],
  state: {
    packageName: '',
    packageVersion: '',
    packageAuthor: '',
    packageDescription: '',
    packageListData: [],
    dialogAppConfig: false,
    dialogAppPublish: false,
    exporting: false,
    importting: false
  },
  computed: {
    scopedPackageIcon (scoped) { // Scope-组件包-图标
      return this.composite.context.baseUrl + '/' + scoped.item.name + '/' + scoped.item.icon
    },
    scopedPackageName: scoped => { // Scope-组件包-名称
      return scoped.item.name
    },
    scopedPackageDesc: scoped => { // Scope-组件包-描述
      return scoped.item.description
    },
    scopedPackageVersion: scoped => { // Scope-组件包-版本
      return scoped.item.version
    }
  },

  async setup () {
    this.updateState()
  },
  async update () {
    this.updateState()
  },

  destory () {
  },

  watch: {
  },

  actions: {
    async updateState () {
      const packageObject = this.properties.packageObject || {}
      this.state.packageName = packageObject.name ?? ''
      this.state.packageVersion = packageObject.version ?? ''
      this.state.packageAuthor = packageObject.author ?? ''
      this.state.packageDescription = packageObject.description ?? ''

      this.state.packageListData = []
      for (const packageName in packageObject.dependencies || {}) {
        const object = await this.composite.context.loader.getPackageJSON(packageName)
        if (object) {
          this.state.packageListData.push(object)
        }
      }
    },

    toast (msg) {
      if (window.SemiUI) {
        const { Toast } = window.SemiUI
        Toast.success(msg)
      }
    },

    confirm (msg, onOk) {
      if (window.SemiUI) {
        const { Modal } = window.SemiUI
        Modal.confirm({
          zIndex: 10001,
          title: '操作确认',
          content: msg,
          onOk
        })
      }
    },

    async onDropDownMenuClick (key) {
      console.log('onDropDownMenuClick', key)
      const packageJsonObject = this.getPackageObject()
      const appService = this.composite.context.services.appService
      switch (key) {
        case 'save':
          this.dialogAppPublish = true
          break
        case 'upload':
          try {
            await appService.savePackageJSONObject(packageJsonObject)
            await appService.publishApp(false)
            this.toast('应用已经保存到服务端，位置：/public/npm/' + packageJsonObject.name)
          } catch (e) {
            this.toast('应用保存异常，服务无法连接')
          }
          break
        case 'export':
          this.exportAppZip()
          break
        case 'import':
          this.importAppZip()
          break
        case 'reset':
          this.resetApp()
          break
        default:
          break
      }
    },

    async resetApp () {
      this.confirm('重置应用会清空目前所有内容，如果有需要的工作，建议您首先导出备份。 是否继续?', () => {
        const appService = this.composite.context.services.appService
        appService.reset()
      })
    },

    async importAppZip () {

    },

    async exportAppZip () {
      if (this.state.exporting) {
        return
      }

      this.toast('正在导出应用，请稍侯...')
      this.state.exporting = true
      const appService = this.composite.context.services.appService
      await appService.exportAppArchive()
      this.state.exporting = false
    },

    getPackageObject () {
      const packageObject = {
        name: this.state.packageName,
        version: this.state.packageVersion,
        author: this.state.packageAuthor,
        description: this.state.packageDescription,
        dependencies: this.properties.packageObject.dependencies
      }
      return packageObject
    },

    async save () {
      const appService = this.composite.context.services.appService
      await appService.savePackageJSONObject(this.getPackageObject())

      this.toast('已经保存应用配置')
    },
    openConfigDialog () {
      this.state.dialogAppConfig = true
      this.updateState()
    },

    closeConfigDialog () {
      this.state.dialogAppConfig = false
    }
  }
}
