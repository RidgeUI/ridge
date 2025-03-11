export default class Spinner {
  constructor (props) {
    this.props = props
  }

  getSpinnerDiv () {
    const { message, __isEdit, styleClassList } = this.props
    if (!this.spinnerDiv) {
      const mainDiv = document.createElement('div')
      Object.assign(mainDiv.style, {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      })

      mainDiv.innerHTML =
      `<div class='spinner-border spinner-border-sm' role='status'>
          <span class='visually-hidden'>${message}</span>
      </div>
      <div class='message' style='margin-left: 8px;'>${message}</div>`

      if (!__isEdit) {
        Object.assign(mainDiv.style, {
          position: 'absolute',
          left: 0,
          top: 0
        })
      }
      this.spinnerDiv = mainDiv
      mainDiv.className = styleClassList.join(' ')
    }
    return this.spinnerDiv
  }

  mount (el) {
    const { __isEdit } = this.props

    const spinnerDiv = this.getSpinnerDiv()
    if (__isEdit) {
      el.appendChild(spinnerDiv)
    } else {
      this.updateRuntime(spinnerDiv)
    }
  }

  update (props) {
    this.props = props
    const { message, __isEdit, styleClassList = [] } = this.props
    const spinnerDiv = this.getSpinnerDiv()

    spinnerDiv.querySelector('.message').innerHTML = message
    spinnerDiv.className = styleClassList.join(' ')
    if (!__isEdit) {
      this.updateRuntime(spinnerDiv)
    }
  }

  updateRuntime (spinnerDiv) {
    const { target, showLoading } = this.props
    if (target) {
      if (showLoading) {
        target.onMounted(target => {
          if (target.el.style.position === 'static' || target.el.style.position === '') {
            target.el.dataset.position = target.el.style.position
            target.el.style.position = 'relative'
          }

          target.el.appendChild(spinnerDiv)
        })
      } else {
        target.onMounted(target => {
          if (spinnerDiv.parentElement === target.el) {
            if (target.el.dataset.position === '' || target.el.style.position === 'static') {
              target.el.style.position = ''
            }
            target.el.removeChild(spinnerDiv)
          }
        })
      }
    }
  }
}
