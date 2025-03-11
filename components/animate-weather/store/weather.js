// 天气代码对应的含义
var weatherCodeMap = {
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
// 根据城市名称获取经纬度
async function getCoordinates (city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`
  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      if (data.results && data.results.length > 0) {
        return {
          latitude: data.results[0].latitude,
          longitude: data.results[0].longitude
        }
      }
    }
  } catch (error) {
    console.error('获取经纬度时出错:', error)
  }
  return null
}

// 根据经纬度获取天气信息
async function getWeather (latitude, longitude) {
  // 修正后的 API 请求地址，去除了错误的参数
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m,winddirection_10m&daily=temperature_2m_max,temperature_2m_min,weathercode,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&forecast_days=5`
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
async function getWeatherInfo (city) {
  const coordinates = await getCoordinates(city)
  if (!coordinates) {
    return { error: '未能获取到城市的经纬度。' }
  }

  const weatherData = await getWeather(coordinates.latitude, coordinates.longitude)
  if (!weatherData) {
    return { error: '未能获取到天气信息。' }
  }

  function getWindDirectionDescription (angle) {
    const directions = ['北', '东北', '东', '东南', '南', '西南', '西', '西北']
    const index = Math.round((angle % 360) / 45)
    return directions[index % 8]
  }

  function getWindForceLevel (speed) {
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

  const result = {
    currentWeather: {
      temperature: weatherData.current_weather.temperature,
      humidity: weatherData.hourly.relativehumidity_2m[0],
      windDirection: getWindDirectionDescription(weatherData.current_weather.winddirection),
      windSpeed: weatherData.current_weather.windspeed,
      windForce: getWindForceLevel(weatherData.current_weather.windspeed),
      weather: weatherCodeMap[weatherData.current_weather.weathercode] || '未知天气'
    },
    next10Hours: [],
    next5Days: []
  }

  const hourlyData = weatherData.hourly
  for (let i = 0; i < Math.min(10, hourlyData.time.length); i++) {
    result.next10Hours.push({
      time: hourlyData.time[i],
      temperature: hourlyData.temperature_2m[i],
      humidity: hourlyData.relativehumidity_2m[i],
      windDirection: getWindDirectionDescription(hourlyData.winddirection_10m[i]),
      windSpeed: hourlyData.windspeed_10m[i],
      windForce: getWindForceLevel(hourlyData.windspeed_10m[i]),
      weather: weatherCodeMap[hourlyData.weathercode[i]] || '未知天气'
    })
  }

  const dailyData = weatherData.daily
  const hourlyTime = hourlyData.time
  const hourlyHumidity = hourlyData.relativehumidity_2m
  for (let i = 0; i < dailyData.time.length; i++) {
    const currentDate = dailyData.time[i]
    const dayHumidityValues = []
    for (let j = 0; j < hourlyTime.length; j++) {
      if (hourlyTime[j].startsWith(currentDate)) {
        dayHumidityValues.push(hourlyHumidity[j])
      }
    }
    const maxHumidity = Math.max(...dayHumidityValues)
    const minHumidity = Math.min(...dayHumidityValues)

    result.next5Days.push({
      date: dailyData.time[i],
      maxTemperature: dailyData.temperature_2m_max[i],
      minTemperature: dailyData.temperature_2m_min[i],
      maxHumidity,
      minHumidity,
      windDirection: getWindDirectionDescription(dailyData.winddirection_10m_dominant[i]),
      maxWindSpeed: dailyData.windspeed_10m_max[i],
      windForce: getWindForceLevel(dailyData.windspeed_10m_max[i]),
      weather: weatherCodeMap[dailyData.weathercode[i]] || '未知天气'
    })
  }

  return result
}
export default {
  name: 'WeatherForcast',
  state: {
    currentCity: 'Beijing',
    weatherData: {
      currentWeather: {
        temperature: 3.5,
        humidity: 25,
        windDirection: '北',
        windSpeed: 5.4,
        windForce: 3,
        weather: '主要晴朗'
      },
      next10Hours: [
        {
          time: '2025-02-21T00:00',
          temperature: -2.2,
          humidity: 25,
          windDirection: '东',
          windSpeed: 5,
          windForce: 3,
          weather: '晴朗'
        },
        {
          time: '2025-02-21T01:00',
          temperature: -2.7,
          humidity: 25,
          windDirection: '东北',
          windSpeed: 3.8,
          windForce: 3,
          weather: '晴朗'
        },
        {
          time: '2025-02-21T02:00',
          temperature: -3,
          humidity: 28,
          windDirection: '北',
          windSpeed: 3.3,
          windForce: 2,
          weather: '晴朗'
        },
        {
          time: '2025-02-21T03:00',
          temperature: -3.4,
          humidity: 28,
          windDirection: '北',
          windSpeed: 3.8,
          windForce: 3,
          weather: '晴朗'
        },
        {
          time: '2025-02-21T04:00',
          temperature: -3.9,
          humidity: 29,
          windDirection: '北',
          windSpeed: 4.1,
          windForce: 3,
          weather: '晴朗'
        },
        {
          time: '2025-02-21T05:00',
          temperature: -4.3,
          humidity: 30,
          windDirection: '北',
          windSpeed: 4.7,
          windForce: 3,
          weather: '晴朗'
        },
        {
          time: '2025-02-21T06:00',
          temperature: -4.6,
          humidity: 30,
          windDirection: '北',
          windSpeed: 4.7,
          windForce: 3,
          weather: '部分多云'
        },
        {
          time: '2025-02-21T07:00',
          temperature: -4.7,
          humidity: 31,
          windDirection: '北',
          windSpeed: 4,
          windForce: 3,
          weather: '多云'
        },
        {
          time: '2025-02-21T08:00',
          temperature: -3.6,
          humidity: 27,
          windDirection: '北',
          windSpeed: 3.6,
          windForce: 3,
          weather: '多云'
        },
        {
          time: '2025-02-21T09:00',
          temperature: -2.6,
          humidity: 25,
          windDirection: '北',
          windSpeed: 3.8,
          windForce: 3,
          weather: '多云'
        }
      ],
      next5Days: [
        {
          date: '2025-02-21',
          maxTemperature: 3.7,
          minTemperature: -4.7,
          maxHumidity: 39,
          minHumidity: 15,
          windDirection: '东北',
          maxWindSpeed: 7.4,
          windForce: 4,
          weather: '多云'
        },
        {
          date: '2025-02-22',
          maxTemperature: 3.2,
          minTemperature: -5.8,
          maxHumidity: 33,
          minHumidity: 12,
          windDirection: '北',
          maxWindSpeed: 13.3,
          windForce: 6,
          weather: '晴朗'
        },
        {
          date: '2025-02-23',
          maxTemperature: 4.9,
          minTemperature: -6.2,
          maxHumidity: 29,
          minHumidity: 13,
          windDirection: '西北',
          maxWindSpeed: 14.8,
          windForce: 7,
          weather: '晴朗'
        },
        {
          date: '2025-02-24',
          maxTemperature: 8.8,
          minTemperature: -5.1,
          maxHumidity: 45,
          minHumidity: 9,
          windDirection: '西南',
          maxWindSpeed: 10.4,
          windForce: 5,
          weather: '晴朗'
        },
        {
          date: '2025-02-25',
          maxTemperature: 8.9,
          minTemperature: -3.9,
          maxHumidity: 46,
          minHumidity: 8,
          windDirection: '西北',
          maxWindSpeed: 24,
          windForce: 9,
          weather: '晴朗'
        }
      ]
    },
    name: 'World' // 姓名
  },

  actions: {
    async fetchWeather () {
      const result = await getWeatherInfo(this.currentCity)
      console.log(result)
    }
  }
}
