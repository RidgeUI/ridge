function roundResult(number) {
  return Math.round(number * 1000) / 1000
}

function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '−':
      return substract(a, b)
    case '×':
      return multiply(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}

export default {
  name: 'BaseCalculator',
  state: {
    currentDisplay: '', // 当前显示
    currentOperation: null, // 当前计算
    firstOperand: '', // 计算左侧
    secondOperand: '', // 计算右侧
    lastOperation: '' // 上次计算表达式
  },

  setup() {
    this.keyDownhandler = this.handleKeyboardInput.bind(this)
    window.addEventListener('keydown', this.keyDownhandler)
  },

  destory () {
    window.removeEventListener('keydown', this.keyDownhandler)
  },

  actions: {
    handleKeyboardInput(e) {
      if (e.key >= 0 && e.key <= 9) this.appendNumber(e.key)
      if (e.key === '.') this.appendPoint()
      if (e.key === '%') this.handlePercent()
      if (e.key === '=' || e.key === 'Enter') this.evaluate()
      if (e.key === 'Backspace') this.deleteNumber()
      if (e.key === 'Escape') this.clear()
      if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
        this.setOperation(this.convertOperator(e.key))
    },

    evaluate() { // 计算
      if (this.currentOperation == null || this.shouldResetScreen) return
      if (this.currentOperation === '÷' && this.currentDisplay === '0') {
        alert("You can't divide by 0!")
        return
      }
      this.secondOperand = this.currentDisplay
      this.currentDisplay = roundResult(
        operate(this.currentOperation, this.firstOperand, this.secondOperand)
      )
      this.lastOperation = `${this.firstOperand} ${this.currentOperation} ${this.secondOperand} =`
      this.currentOperation = null
    },

    appendNumber(n) { // 输入数字
      if (this.currentDisplay === '0' || this.shouldResetScreen) {
        this.resetScreen()
      }    
      this.currentDisplay += n
    },

    deleteNumber() { // 回退
        this.currentDisplay = this.currentDisplay.toString().slice(0, -1)
    },

    handlePercent() { // 处理百分号
      if (this.currentOperation === '÷' || this.currentOperation === '×') {
        if (this.currentDisplay) {
          this.secondOperand = this.currentDisplay + '%'
          this.currentDisplay = roundResult(operate(this.currentOperation, this.firstOperand, Number(this.currentDisplay) / 100))
          this.lastOperation = `${this.firstOperand} ${this.currentOperation} ${this.secondOperand} =`
          this.currentOperation = null
        }
      }
      if (this.currentOperation === '+' || this.currentOperation === '−') {
        // 计算 a + a * n%
        if (this.currentDisplay) {
          this.secondOperand = this.currentDisplay + '%'
          this.currentDisplay = roundResult(operate(this.currentOperation, this.firstOperand, Number(this.firstOperand) * Number(this.currentDisplay) / 100))
          this.lastOperation = `${this.firstOperand} ${this.currentOperation} ${this.secondOperand} =`
          this.currentOperation = null
        }
      }
    },

    setOperation(operator) { // 设置运算符
      // 如果有计算符先计算
      if (this.currentOperation != null) this.evaluate()
      this.firstOperand = this.currentDisplay
      this.currentOperation = this.convertOperator(operator)
      this.lastOperation = `${this.firstOperand} ${this.currentOperation}`
      this.shouldResetScreen = true
    },

    toggleNegative() { // 切换正负数
      if (this.currentDisplay) {
        this.currentDisplay = -Number(this.currentDisplay)
      }
    },
    
    resetScreen: context => {
      context.currentDisplay = ''
      context.shouldResetScreen = false
    },
    
    clear: context => { // AC
      context.currentDisplay = '0'
      context.lastOperation = ''

      context.firstOperand = ''
      context.secondOperand = ''
      context.currentOperation = null
    },
    
    appendPoint() { // 输入.点
      if (this.shouldResetScreen) this.resetScreen()
      if (this.currentDisplay === '') {
        this.currentDisplay = '0'
      }
      if (this.currentDisplay.includes('.')) return
      this.currentDisplay += '.'
    },
    
    convertOperator(keyboardOperator) { // 转换计算
      if (keyboardOperator === '/') return '÷'
      if (keyboardOperator === '*') return '×'
      if (keyboardOperator === '-') return '−'
      if (keyboardOperator === '+') return '+'

      return keyboardOperator
    }

  }
}
