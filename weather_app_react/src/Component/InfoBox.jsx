import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const InfoBox = ({ info }) => {
  
  // Provide default values to avoid undefined errors
  const { city = 'Unknown', feelsLike = 0, humidity = 0, temp = 0, tempMax = 0, tempMin = 0, weather = 'Unknown' } = info || {};

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="https://store-images.s-microsoft.com/image/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.1bbd88a4-0a17-4750-91a0-cd7d98f58e9d"
          alt="Weather"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component={"span"}>
            <h6>city: {city}</h6>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>feelsLike: {feelsLike}</p>
            <p>humidity: {humidity}</p>
            <p><b>temp: {temp}</b></p>
            <p>tempmax: {tempMax}</p>
            <p>tempmin: {tempMin}</p>
            <p>weather: {weather}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InfoBox;
