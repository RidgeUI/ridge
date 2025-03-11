# RidgeUI页面脚本开发系列:计算器页面脚本开发

我们首先看看计算器。 虽然大家日常经常会使用它，但是真要实现它，还需要进行一些分析
从用户交互来讲，计算器是：
1. 有很多按键，除了0-9、加减乘除、等于、清除是标配，而复杂一些的计算器会提供更多计算功能
2. 点击按键时，屏幕会显示相关结果，例如计算式行和当前结果行 （我们实体计算器一般因为屏幕支持原因，不包含计算式行）

从交互分析来看，需要提供一个方法来处理每个按键按下事件。同时提供2个页面状态，显示根据按键的动作，更新计算结果行和计算式行的内容

为此，我们可以生成以下程序结构
```javascript
export default {
  name: 'Calculator',
  state: {
    currentDisplay: '0', // 当前结果行
    lastOperation: '' // 计算式行
  },

  actions: {
    onKeyPressed (key) { // 按键按下

    }
  }
}
```
后面需要实现各种按键的处理逻辑即可

## 输入数字

大部分情况下，数字按键按下时，只需要为当前结果行添加输入的数字即可

```javascript
const appendNumber = (context, n) => {
  if (context.currentDisplay === '0' || context.shouldResetScreen) {
        resetScreen(context)
    }    
    context.currentDisplay += n
}

const resetScreen = (context) => {
  context.currentDisplay = '0'
  context.shouldResetScreen = false
}

```
然而也有一些特殊的情况，1是如果之前输入过0， 那么显示2个0是没意义的，就只显示一个0。2是如果刚按下加减乘除等符号，那么这时输入数字也会首先清空屏幕，因为之前的数字是计算式左侧

将方法加入整体判断，代码如下：
```javascript
export default {
  name: 'Calculator',
  state: {
    currentDisplay: '', // 当前结果行
    lastOperation: '' // 计算式行
  },

  actions: {
    onKeyPressed (key) { // 按键按下
      const code = key.charCodeAt(0)
      if (code >= 48 && code <= 57) {
        appendNumber(this, key)
      }
    }
  }
}
```

## 处理加减乘除

当按下加减乘除时， 会将现在屏幕上数字设置为计算左侧，并设置当前计算符号，后面输入数字会从头输入，作为计算右侧

这里要注意的是，如果之前已经输入完整的计算式例如 1+2, 在输入计算符号相当于先计算出3作为计算左侧

方法如下：
```javascript

const convertOperator = keyboardOperator => { // 转换展示字符
  if (keyboardOperator === '/') return '÷'
  if (keyboardOperator === '*') return '×'
  if (keyboardOperator === '-') return '−'
  if (keyboardOperator === '+') return '+'
  return keyboardOperator
}

const setOperation = (context, operator) => { // 设置运算符
    // 如果有计算符先计算
    if (context.currentOperation != null) evaluate(context)
    context.firstOperand = context.currentDisplay
    context.currentOperation = operator
    context.lastOperation = `${context.firstOperand} ${convertOperator(operator)}`
    context.shouldResetScreen = true
}
```


## 处理计算

计算发生在按下符号或者等号时处理

```javascript
 
const add = (a, b) => {
  return a + b
}

const substract = (a, b) => {
  return a - b
}

const multiply = (a, b) => {
  return a * b
}

const divide = (a, b) => {
  return a / b
}

const operate = (operator, a, b) => {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return substract(a, b)
    case '*':
      return multiply(a, b)
    case '/':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}

const roundResult = number => {
  return Math.round(number * 1000) / 1000
}


const evaluate = context => { // 计算
  if (context.currentOperation == null || context.shouldResetScreen) return
  if (context.currentOperation === '/' && context.currentDisplay === '0') {
    alert("You can't divide by 0!")
    return
  }
  
  context.secondOperand = context.currentDisplay
  context.currentDisplay = roundResult(
    operate(context.currentOperation, context.firstOperand, context.secondOperand)
  )
  context.lastOperation = `${context.firstOperand} ${convertOperator(context.currentOperation)} ${context.secondOperand} =`
  context.currentOperation = null
}

```
上面处理加减乘除不再赘述。 计算过程中需要更新计算式行与结果行， 同时清空现在的计算符号


## 其他按键处理

按键回退就是删除一个数字，如果是最后一个数字则屏幕置为0
```javascript
const back = context => { // 回退
  context.currentDisplay = context.currentDisplay.toString().slice(0, -1) || '0'
}
```

切换正负就是将当前数字取负值，注意0的负数也是0
```javascript
const toggleNegative = context => { // 切换正负数
  if (context.currentDisplay) {
    context.currentDisplay = -Number(context.currentDisplay)
  }
}
```

全清空：将所有变量设置为初始状态
```javascript
const clear = context => { // AC
  context.currentDisplay = '0'
  context.lastOperation = ''

  context.firstOperand = ''
  context.secondOperand = ''
  context.currentOperation = null
}
```

输入小数点就是追加点，但如果当前输入过点，那么当前输入就忽略。
```javascript
const appendPoint = context => { // 输入.点
  if (context.shouldResetScreen) context.resetScreen()
  if (context.currentDisplay.includes('.')) return
  context.currentDisplay += '.'
}
```

## 增加键盘绑定

最后，如果在电脑上运行，我们增加对按键的绑定，让用户按电脑键盘就能进行操作

```javascript

const handleKeyboardInput = (context, key) => {
  if (key >= 0 && key <= 9) appendNumber(context, key)
  if (key === '.') appendPoint(context)
  if (key === '%') handlePercent(context)
  if (key === '=' || key === 'Enter') evaluate(context)
  if (key === 'Backspace') back(context)
  if (key === 'Escape') clear(context)
  if (key === '+' || key === '-' || key === '*' || key === '/') setOperation(context,key)
}
```

注意要通过destory来设置取消键盘绑定

```javascript
setup() {
  this.keyDownhandler = event => {
    handleKeyboardInput(this, event.key)
  }
  window.addEventListener('keydown', this.keyDownhandler)
},

destory () {
  window.removeEventListener('keydown', this.keyDownhandler)
},

```

现在我们向页面放入计算器相关按键， 为每个按键配置点击动作， 让上方显示屏连接到计算和显示，这个计算器小程序就开发完了


我们可以在ridgeui.com的应用示例页查看到这个程序，同时可以编辑打开查看设计和教程的源代码。 

您还可以使用这个脚本按自己的爱好设计出各种样式的计算器。


## 最后的问题

下面还有个问题，当点击计算器的百分号，会发生什么? 结果和处理可能比你想象的复杂，这个就留给大家思考把。

