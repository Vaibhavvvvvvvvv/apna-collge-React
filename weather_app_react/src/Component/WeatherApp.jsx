import React,{useState} from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
const WeatherApp = () => {
  const [weatherInfo,setWeatherInfo] = useState({
    city:"Shajpur",
    feelsLike: 36.6,
    humidity: 52,
    temp: 32.87,
    tempMax: 32.87,
    tempMin: 32.87,
    weather: "overcast clouds"
})

function updateInfo(newInfo){
   setWeatherInfo(newInfo)
}

  return (
    <div style={{color:"black"}}>
        <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
