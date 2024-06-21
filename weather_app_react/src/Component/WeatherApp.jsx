import React, { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState();

  const api_url = "http://api.openweathermap.org/data/2.5/weather";
  const api_key = "2999deed714bb6a8d54e4d65f57643f7";

  useEffect(() => {
    async function defaultTemp() {
      try {
        const response = await fetch(`${api_url}?q=Shajapur&appid=${api_key}&units=metric`);
        const jsonRes = await response.json();
        console.log(jsonRes);

        setWeatherInfo({
          city: "Shajapur",
          temp: jsonRes.main?.temp || 0,
          tempMin: jsonRes.main?.temp_min || 0,
          tempMax: jsonRes.main?.temp_max || 0,
          humidity: jsonRes.main?.humidity || 0,
          feelsLike: jsonRes.main?.feels_like || 0,
          weather: jsonRes.weather?.[0]?.description || 'Unknown',
        });
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    }

    defaultTemp();
  }, []); // Empty dependency array ensures this runs once on mount

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
