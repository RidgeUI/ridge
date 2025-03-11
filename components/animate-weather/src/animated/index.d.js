import WeatherIcon from './WeatherIcon.jsx'
export default {
  name: 'WeatherIcon',
  title: '气象图标',
  component: WeatherIcon,
  icon: 'icons/sun-cloud.svg',
  type: 'react',
  props: [{
    name: 'weatherName',
    label: '天气',
    type: 'string',
    value: 'Heavy Rain',
    control: 'select',
    optionList: ['Clear', 'Overcast', 'Broken Clouds', 'Cloudy', 'Fog', 'Light Drizzle', 'Drizzle', 'Heavy Drizzle', 'Light Drizzle Showers', 'Drizzle Showers', 'Heavy Drizzle Showers', 'Light Rain', 'Rain', 'Heavy Rain', 'Light Rain Showers', 'Rain Showers', 'Heavy Rain Showers', 'Thunder Storm', 'Thunder Storm Light Rain', 'Thunder Storm Rain', 'Thunder Storm Heavy Rain', 'Thunder Storm Light Drizzle', 'Thunder Storm Drizzle', 'Thunder Storm Heavy Drizzle', 'Hail', 'Sleet', 'Sleet Showers', 'Light Snow', 'Snow', 'Heavy Snow', 'Light Snow Showers', 'Snow Showers', 'Heavy Snow Showers'],
    connect: true
  }, {
    name: 'isNight',
    label: '是否夜晚',
    type: 'boolean',
    value: false,
    connect: true
  }],
  events: [],
  width: 480,
  height: 64
}
