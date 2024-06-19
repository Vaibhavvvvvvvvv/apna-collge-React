// import React,{useEffect, useState} from 'react'
// import InfoBox from './InfoBox'
// import SearchBox from './SearchBox'
// const WeatherApp = () => {
//   const [weatherInfo,setWeatherInfo] = useState({
//     city:"Shajpur",
//     feelsLike: 36.6,
//     humidity: 52,
//     temp: 32.87,
//     tempMax: 32.87,
//     tempMin: 32.87,
//     weather: "overcast clouds"
// })

// useEffect(()=>{
//   const fetchWeatherData = async () =>{
//     const response = await fetch()
//   }
// })

// function updateInfo(newInfo){
//    setWeatherInfo(newInfo)
// }

//   return (
//     <div style={{color:"black"}}>
//         <h2>Weather App</h2>
//       <SearchBox updateInfo={updateInfo}/>
//       <InfoBox info={weatherInfo}/>
//     </div>
//   )
// }

// export default WeatherApp

import React, { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Shajpur",
    feelsLike: 36.6,
    humidity: 52,
    temp: 32.87,
    tempMax: 32.87,
    tempMin: 32.87,
    weather: "overcast clouds"
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('YOUR_WEATHER_API_URL');
        const data = await response.json();
        const newWeatherInfo = {
          city: data.name,
          feelsLike: data.main.feels_like,
          humidity: data.main.humidity,
          temp: data.main.temp,
          tempMax: data.main.temp_max,
          tempMin: data.main.temp_min,
          weather: data.weather[0].description
        };
        setWeatherInfo(newWeatherInfo);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  function updateInfo(newInfo) {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ color: "black" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
