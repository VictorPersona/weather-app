import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import searchIcon from '../assets/search.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'

const Weather = () => {
  const api_key = import.meta.env.VITE_API_KEY
  const [weatherData, setWeatherData] = useState(false)
  const inputRef = useRef()
  const search = async (city) => {
    if (!city) {
      alert('Please enter a proper city name')
      return
    }
    try {
      const geocodedUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`
      const geoResponse = await fetch(geocodedUrl)
      if (!geoResponse.ok) {
        alert('City not found')
        return
      }

      const geoData = await geoResponse.json()
      if (!geoData.length) {
        alert('City not found')
        return
      }

      const { lat, lon } = geoData[0]
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
      const weaResponse = await fetch(weatherUrl)
      const data = await weaResponse.json()

      setWeatherData({
        temperature: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        wind: data.wind.speed,
        icon: data.weather[0].icon,
        location: data.name,
      })
      inputRef.current.value = ''
    } catch (error) {
      setWeatherData(false)
      console.log('Error fetching weather data:', error)
    }
  }
  useEffect(() => {
    search('Kyoto')
  }, [])

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <button
          className="search-button"
          onClick={() => {
            search(inputRef.current.value)
          }}
        >
          <img src={searchIcon} alt="" />
        </button>
      </div>
      {weatherData && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            alt=""
            className="weather-icon"
          />
          <p className="temperature">{weatherData.temperature}&deg; c</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity} alt="" />
              <p>{weatherData.humidity}</p>
              <span>Humidity</span>
            </div>
            <div className="col">
              <img src={wind} alt="" />
              <p>{weatherData.wind}</p>
              <span>Km/hr</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Weather
