import React from 'react'
import './home.css'
import sun from '../../assets/sun.png'
import city from '../../assets/city.jpg'

export const Home = () => {
  return (
    <div className='home-container'>
    <div className='left-container'>
        <div className='input-container'>
            <span><i className="ri-search-line search-icon"></i></span>
            <input placeholder='Search For Place' className='city-input' />
        </div>
        <div className='left-img-container'>
           <img src={sun} ></img>
        </div>
        <div className='left-temp-container'>
          <div>12 <i className="ri-celsius-fill"></i> </div>
        </div>
        <div className='left-city-img-container'>
          <img src={city} ></img>
        </div>
    </div>

    <div className='right-container'>

    </div>

    </div>
  )
}

export default Home
