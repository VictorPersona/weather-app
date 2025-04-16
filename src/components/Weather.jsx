import React from 'react'
import "./Weather.css"
import search from '../assets/search_icon.png'

const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='Search' />
            <img src={search} alt="" />
        </div>
    </div>
  )
}

export default Weather