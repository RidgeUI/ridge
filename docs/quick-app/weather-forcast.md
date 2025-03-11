# RidgeUI脚本开发系列：编写天气预报脚本库

## AI摘要

本文是 RidgeUI 脚本开发系列中关于编写天气预报脚本库的内容。天气预报页面主要功能包括显示区域、天气、温湿度等，脚本目标先实现显示天气。获取天气数据通过国外 open-meteo 网站免费 API，其接口需经纬度，可借助 china-regions-lat 库根据地址获取。获取数据后要格式化，将天气代码、风力风向描述转换。脚本库主体命名 WeatherForcast，引入相关库，设置状态和方法获取、转换数据。还实现了切换位置功能，将地区和位置存本地缓存。最后完成较完整天气预报程序，可在ridgeui.com网站查看代码和配置示例，还提出能否利用获取的按小时气象数据实现温度变化曲线功能的问题。




首先老规矩，看下天气预报页面的主要功能。

天气预报通常会显示区域、天气、温湿度、风力风向及未来几天的温度和天气。另外区域也可以进行切换甚至支持显示多个区域。 

我们这个脚本目标暂时先支持显示天气即可。 

虽然页面交互较少，但是真正完成应用还有很多问题：最首要的是如何获取天气数据。

## 获取天气数据

通过询问AI，国内应该没有免费的API可以调用， 所以获取天气数据成了一个难题。

好在国外网站中，终于找到一个免费并且不需要提供token的服务，那就是 open-meteo。 我们访问 [api.open-meteo.com](https://www.open-meteo.com/) 

它有个生成调用地址的页面，结合询问AI，我们得到这个查询地址


> `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m,winddirection_10m&daily=temperature_2m_max,temperature_2m_min,weathercode,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&forecast_days=4`
>

这样就能拿到我们页面所需所有数据。 

另外这个接口需要传入查询地点的经纬度，而你总不能让用户去查经纬度。 虽然oepn-meteo提供了查询坐标的API，但是它只支持英文，例如

> https://geocoding-api.open-meteo.com/v1/search?name=beijing

因为是按拼音查，还是有很多beijing的地址，所以这个方案只是个备选做法。

好在要查到区县以上的区域坐标还是可以做到的，那就是 china-regions-lat 库。 这个库是我根据行政区划结合地理位置处理生成的，根据地址就可以查询区号和中心经纬度

访问这个地址就可以
> https://unpkg.com/china-regions-lat@1.0.1/lib/lats.js

其片段如下： 
```json
[
    {
      pid: 110000,
      code: 110119,
      fullname: '延庆区',
      center: [
        115.985006,
        40.465325
      ]
    },
    {
      pid: 120000,
      code: 120101,
      fullname: '和平区',
      center: [
        117.195907,
        39.118327
      ]
    },
]
```
这样我们就可以很开心的根据区域获取坐标了。

```javascript
const searchAndFindParent = (data, searchTerm) => {
  const result = []
  // 先找出符合搜索条件的项目
  const matchedItems = data.filter(item => item.fullname.includes(searchTerm)).splice(0, 10)
  for (const item of matchedItems) {
    const currentResult = {
      ...item,
      parents: []
    }
    // 递归查找所有父级节点
    findAllParents(data, item.pid, currentResult.parents)
    result.push(currentResult)
  }
  return result
}

const findAllParents = (data, pid, parents) => {
  const parent = data.find(parentItem => parentItem.code === pid)
  if (parent) {
    parents.unshift(parent)
    // 继续递归查找父级的父级
    this._findAllParents(data, parent.pid, parents)
  }
}
```

上面这个方法就是根据给出的区域数据和用户输入的名称，查找符合条件的列表，每项都包含省市县便于用户选择

当用户选定区域后，我们得到坐标，然后调用获取天气接口，就能拿到数据了 

```javascript

// 根据经纬度获取天气信息
const getWeather = async (latitude, longitude) => {
  // 修正后的 API 请求地址，去除了错误的参数
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m,winddirection_10m&daily=temperature_2m_max,temperature_2m_min,weathercode,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&forecast_days=4`
  try {
    const response = await fetch(url)
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error('获取天气信息时出错:', error)
  }
  return null
}

```

## 格式化返回数据

你是否注意到，表示天气的代码是一个数字，是世界气象组织(WMO)代码。这个是专业代码对天气划分非常细致，但这一方面不适合普通人直观感受，另一方面，和最终界面展示组件的属性也无法一一对应

我们找到了这个气象图标组件支持像  'Clear' 'Overcast' 'Broken Clouds' 这样的天气名称，并且还支持夜晚图标，用户通过图标就能很直观了解当前天气

借助AI的辅助，我们生成了一个对照关系表，将天气代码转换为图标名称

```javascript
// 天气代码对应的含义
const weatherCodeMap = {
  0: 'Clear',
  1: 'Clear',
  2: 'Broken Clouds',
  3: 'Cloudy',
  45: 'Fog',
  48: 'Fog',
  51: 'Light Drizzle',
  53: 'Drizzle',
  55: 'Heavy Drizzle',
  56: 'Sleet',
  57: 'Sleet',
  61: 'Light Snow',
  63: 'Snow',
  65: 'Heavy Snow',
  66: 'Sleet',
  67: 'Sleet',
  71: 'Light Snow',
  73: 'Snow',
  75: 'Heavy Snow',
  77: 'Hail',
  80: 'Light Rain Showers',
  81: 'Rain Showers',
  82: 'Heavy Rain Showers',
  85: 'Light Snow Showers',
  86: 'Heavy Snow Showers',
  95: 'Thunder Storm',
  96: 'Thunder Storm Light Rain',
  99: 'Thunder Storm Heavy Rain'
}
```

这样，从上述API拿到天气值就可以通过这个表转为具体数据，进而给到我们上个组件了 


同样风力、风向描述也要转换，下面是风向的转换，将风向角度（360度）转化为八个方位

```javascript
const getWindDirectionDescription = (angle) => {
    const directions = ['北', '东北', '东', '东南', '南', '西南', '西', '西北']
    const index = Math.round((angle % 360) / 45)
    return directions[index % 8]
}
```

将风速（米每秒）转换为一到十二级风

```javascript

const getWindForceLevel = (speed) => {
  const windLevels = [
    { min: 0, max: 0.2, level: 0 },
    { min: 0.3, max: 1.5, level: 1 },
    { min: 1.6, max: 3.3, level: 2 },
    { min: 3.4, max: 5.4, level: 3 },
    { min: 5.5, max: 7.9, level: 4 },
    { min: 8.0, max: 10.7, level: 5 },
    { min: 10.8, max: 13.8, level: 6 },
    { min: 13.9, max: 17.1, level: 7 },
    { min: 17.2, max: 20.7, level: 8 },
    { min: 20.8, max: 24.4, level: 9 },
    { min: 24.5, max: 28.4, level: 10 },
    { min: 28.5, max: 32.6, level: 11 },
    { min: 32.7, max: Infinity, level: 12 }
  ]
  for (let i = 0; i < windLevels.length; i++) {
    const level = windLevels[i]
    if (speed >= level.min && speed <= level.max) {
      return level.level
    }
  }
  return null
}
```
当然请注意，上述脚本大部分都利用AI协助生成，大家开发也尽量善用AI辅助


## 编写脚本库主体

下面我们编写脚本库主体代码。

```javascript
export default {
  name: 'WeatherForcast',
  externals: ['/china-regions-lat/lib/lats.js'],
  state : () => {
    return {
      currentRegionName: '北京市', // 当前位置名称
      currentRegionPos: [116.405285,39.904989], // 当前位置坐标
      weatherData: { // 天气数据
        currentWeather: { // 现在天气
          temperature: '--', // 温度
          humidity: '--', // 湿度
          windDirection: '-',  // 风向
          windSpeed: '-',
          windForce: '-',   // 风力
          weather: '--' // 天气
        },
        next5Days: []
      }
    }
  },

  setup() {
    this.fetchWeather()
  },

  actions: {
    async fetchWeather () {
       const result = await getWeather(this.currentRegionPos[1], this.currentRegionPos[0])
       this.weatherData = convertWeatherData(result)
    }
  }
}
```

脚本库命名为WeatherForcast，通过externals引入china-regions-lat库。  

在状态字段，提供当前位置名称和当前经纬度。 天气数据是一个完整对象， 里面提供现在天气情况还有未来五日天气概览。  

现在天气情况中，提供温度、湿度、风向、风力等。  未来五日，我们提供天气和温度即可。

在setup时，初始化和获取天气信息，并将接口返回的数据转换为页面状态数据
```javascript
const convertWeatherData = weatherData => {
   const result = {
    currentWeather: {
      temperature: weatherData.current_weather.temperature + '℃', // 温度
      humidity: weatherData.hourly.relativehumidity_2m[0] + '%',  // 湿度
      windDirection: getWindDirectionDescription(weatherData.current_weather.winddirection), // 风力
      windSpeed: weatherData.current_weather.windspeed,
      windForce: getWindForceLevel(weatherData.current_weather.windspeed) + '级',
      weather: weatherCodeMap[weatherData.current_weather.weathercode] || '未知天气'
    },
    next10Hours: [],
    next5Days: []
  }
  const dailyData = weatherData.daily
  for (let i = 0; i < dailyData.time.length; i++) {
    result.next5Days.push({
      date: dailyData.time[i],
      maxTemperature: dailyData.temperature_2m_max[i]  + '℃',
      weather: weatherCodeMap[dailyData.weathercode[i]] || '未知天气'
    })
  }
  return result
}
```

小重点： 我们设计前端页面时，所使用的数据结构应该怎样？ 在ridgeui界面脚本开发时，数据结构必须满足界面显示的要求。但是我们获得的后端数据往往是个另外的形式。

通常情况下
1、如果前后独立开发、或者后端数据已经是成型的专业业务。 那么我们需要在脚本里进行转换
2、如果后端只为前端服务，一起开发，那么后端提供数据尽量向前端靠齐，避免转换成本。 

如何选择也不必纠结，前端的特点就是需求变化快，最初的决策很可能经过时间的推移而逐步调整，我们能随时选择一个最合适当下的方案就可以了。

通过页面状态层，前端可以不随着后端进行独立演进，甚至可以更换后端服务，像我们这个天气组件，未来如果open-meteo服务不可用，我们还可以更换使用其他API


## 切换位置

接下来提供用户选择区域功能。 渲染列表并响应列表项点击功能我们已经多次实现，这里不再赘述

先实现方法更新候选地址列表，当用户输入名称时，过滤显示满足名称的列表

```javascript
  async filterPosition () {
      this.filterResult = searchAndFindParent(CHINA_REGIONS_LAT, this.currentRegionName)
  }
```

然后提供选择方法，当用户点击列表项内按钮时，保存地址并刷新天气信息

```javascript
  confirmRegion(scope) { // 区域确认
      this.currentRegionName = scope.item.fullname
      localStorage.setItem('currentRegionName', scope.item.fullname)
      this.currentRegionPos = scope.item.center
      localStorage.setItem('currentRegionPos', JSON.stringify(scope.item.center))
      this.showEditLocation = false
      this.fetchWeather()
  }

```

这里，将地区和位置保存到了浏览器本地缓存中。
那么只需要在初始化时去读取这个地址，用户重新进入页面就会使用之前位置的天气了

```javascript
  setup () {
    this.currentRegionName = localStorage.getItem('currentRegionName') || '北京市'
    this.currentRegionPos = JSON.parse(localStorage.getItem('currentRegionPos') || '[116.405285,39.904989]')
    this.fetchWeather()
  }
```

现在，我们连接上位置、天气还有未来几天列表，同时增加对话框配置提供位置修改，一个比较完整的天气预报程序就完成了。 

你可以通过访问ridgeui.com网站示例例中看到这个全部代码和配置示例

页面地址： https://ridgeui.com/npm/ridge-app-weather/
页面编辑： https://ridgeui.com/npm/ridge-editor/?import=ridge-app-weather

您也可以使用这个脚本定制化自己的天气组件

## 最后的问题

最后，给大家留一个问题：上述获取天气代码中，还同时得到了最近2天按小时的气象数据。 是否可以就此实现一个按小时的温度变化曲线功能呢。









