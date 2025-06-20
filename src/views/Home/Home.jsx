import React, { useEffect, useState } from 'react'
import './home.css'
import sun from '../../assets/sun.png'
import city from '../../assets/city.jpg'
import axios from 'axios'
const API_ID = import.meta.env.VITE_API_ID
import card from '../../components/infoCard/card'   

const Home = () => {

  const[cityName,setCityName] = useState()

   const loadWeather = async () =>{
    try {

        const result = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_ID}&units=metric')
        setWeatherDate(result.data)
    } catch (error){
      console.log(error)
   }
}

  return (
    <div className='home-container'>
    <div className='left-container'>
        <div className='input-container'>
            <input placeholder='Search For Place' className='city-input' value={cityName} onChange={(e)=>{setCityName(e.target.value)}} />
            <span onClick={()=>loadWeather()}><i className="ri-search-line search-icon"></i></span></div>
        
        <div className='left-img-container'>
           <img src={sun} ></img>
        </div>
        <div className='left-temp-container'>
          <div>12 <i className="ri-celsius-fill"></i> </div>
        </div>
        <div className='left-city-img-container'>
          <img src={city} ></img>
          <span className='left-city-name'>Nashik</span>
        </div>
    </div>

    <div className='right-container'>
    <div className='right-container-nav'>
    <div className='day'>Today</div>
    <div><i className="ri-user-fill"></i></div>
    </div>
    <div className='info-card-container '>
      
    </div>
    </div>
    </div>
  )
}

export default Home
