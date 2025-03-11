export default {
  name: 'LoginModal',
  properties: [{
    label: '打开',
    name: 'open',
    type: 'string',
    value: '0'
  }],
  events: [{
    name: 'success',
    label: '成功'
  }, {
    name: 'close',
    label: '关闭'
  }],
  state: {
    modalOpened: false,
    id: '',
    password: '',
    captcha: '',
    requesting: false,
    resultMessage: '',
    captchaUrl: ''
  },

  computed: {
  },

  async setup () {
    this.reloadCaptcha()
    this.toggleModalOpen()
  },

  destory () {
  },

  watch: {
    open () {
      this.toggleModalOpen()
    },
    modalOpened () {
      if (this.state.modalOpened === false) {
        this.emit('close')
      }
    }
  },

  actions: {
    getServerUrl () {
      return this.composite.appPackageObject.ridgeServerUrl || 'http://localhost:7080'
    },

    toggleModalOpen () {
      if (this.properties.open === '0') {
        this.state.modalOpened = false
      } else {
        this.state.modalOpened = true
      }
    },

    reloadCaptcha () { // Reload
      this.state.captchaUrl = this.getServerUrl() + '/api/captcha?' + Math.random()
    },

    checkValid () {
      // 验证手机号码
      if (!/^1[3-9]\d{9}$/.test(this.state.id)) {
        this.idvalid = false
        this.resultMessage = '注意：用户账号为手机号码'
        return false
      } else {
        this.idvalid = true
      }

      // 验证密码
      if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(this.password)) {
        this.passwordvalid = false
        this.resultMessage = '注意：用户密码为数字+字母组合,至少8位'
        return false
      } else {
        this.passwordvalid = true
      }

      if (this.captcha.length !== 4) {
        this.captchavalid = false
        this.resultMessage = '注意: 验证码长度为4'
        return false
      } else {
        this.captchavalid = true
      }
      return true
    },

    checkCaptResult (result) {
      if (result.data.code === '100400') {
        // 验证码错误
        this.captchavalid = true
        this.resultMessage = '验证码输入错误'
        this.reloadCaptcha()
        return false
      }
      return true
    },

    async loginUser () {
      const checked = this.checkValid()
      if (!checked) return

      const requestObject = {
        id: this.id,
        password: this.password,
        captcha: this.captcha
      }
      try {
        this.requesting = true
        const loginResult = await this.axios.post(this.getServerUrl() + '/api/user/login', requestObject, {
          withCredentials: true
        })
        this.requesting = false
        if (!this.checkCaptResult(loginResult)) {
          return
        }
        if (loginResult.data.code !== '0') {
          this.resultMessage = '用户名或者密码错误'
          this.reloadCaptcha()
          return
        }
        this.emit('success')
      } catch (e) {

      }
    }
  }
}
