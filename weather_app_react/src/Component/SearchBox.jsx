import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const api_url = "http://api.openweathermap.org/data/2.5/weather";
  const api_key = "2999deed714bb6a8d54e4d65f57643f7";

  let getWeatherInfo = async () => {
    try {
      let res = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
      let jsonRes = await res.json();
      let result = {
        city: city,
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        weather: jsonRes.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw (err);
    }
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Enter City Name"
          variant="outlined"
          onChange={handleChange}
          required
        />
        <br /><br />
        <Button
          type='submit'
          variant="contained"
          endIcon={<TravelExploreIcon />}>
          Search
        </Button>
        {error && <p style={{ color: "red" }}>!Sorry can't find this place</p>}
      </form>
    </div>
  );
}

export default SearchBox;
