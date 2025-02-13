export default {
  name: 'WebSiteIndex',
  state: {
    index: 'bootstrap',
    theme: 'light'
  },
  actions: {
    toggleTheme(newTheme) {
      this.theme = newTheme
    }
  }
}
