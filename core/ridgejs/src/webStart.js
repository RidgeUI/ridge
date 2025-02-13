import RidgeContext from './RidgeContext'

window.RidgeContext = RidgeContext

// '/npm/ridge-website/'
// '/npm/ridge-website/'
// '/deliver/@ridge/website/'
// '/ridge-website/'
// '/@ridge/website/'
// '/any/extra/npm/ridge-website/'

const pathParts = window.location.pathname.split('/')

let baseUrl = '/'
let appName = ''

if (pathParts[pathParts.length - 3] && pathParts[pathParts.length - 3].startsWith('@')) {
  appName = pathParts[pathParts.length - 3] + '/' + pathParts[pathParts.length - 2]
  baseUrl = pathParts.slice(0, -3).join('/')
} else if (pathParts[pathParts.length - 2]) {
  baseUrl = pathParts.slice(0, -2).join('/')
  appName = pathParts[pathParts.length - 2]
}

function start () {
  const usp = new URLSearchParams(window.location.search)

  // 页面地址： #/path > path=? > 'index'
  const pagePath = window.RIDGE_HOME_PATH || window.location.hash.substring(2) || usp.get('path') || 'index'
  const repoUrl = window.RIDGE_NPM_REPO || baseUrl || '/'
  const appPkgName = window.RIDGE_HOME_APP || appName

  window.ridge = new RidgeContext({
    baseUrl: repoUrl
  })

  if (appPkgName) {
    document.getElementById('app').setAttribute('composite-hash', pagePath)
    const composite = window.ridge.createComposite(appPkgName, pagePath, {})
    composite.mount(document.getElementById('app'), true)
  }

  window.addEventListener('hashchange', () => {
    const hashPath = window.location.hash.substring(2) || 'index'

    if (document.getElementById('app').getAttribute('composite-hash') === hashPath) {
      return
    }
    document.getElementById('app').setAttribute('composite-hash', hashPath)

    const composite = window.ridge.createComposite(appPkgName, hashPath, {})
    composite.mount(document.getElementById('app'), true)
  })
}

start()
