import React, { useEffect, useRef } from 'react'
import { AnimatedWeatherIcon, AnimatedWeatherTypes, AnimatedWeatherTimes } from 'animated-weather-icon'

export default ({ weatherName, isNight }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      if (!ref.current.weatherIcon) {
        ref.current.weatherIcon = new AnimatedWeatherIcon(ref.current)
      }
      ref.current.weatherIcon.setType(weatherName, isNight ? AnimatedWeatherTimes.Night : AnimatedWeatherTimes.Day)
    }
  }, [weatherName, isNight])

  return <div ref={ref} />
}
