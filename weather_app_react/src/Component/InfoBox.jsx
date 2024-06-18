import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const InfoBox = ({info}) => {
   const int_url = "https://i.gifer.com/68J.gif"
    
    let hot_url = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    let cold_url ="https://images.unsplash.com/photo-1541781774459-3f93c625d05c"
    let rain_url = "https://images.unsplash.com/photo-1445810694374-00c7b6374a6b" 
    return (
        <Card sx={{ maxWidth: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image = {
            info.humidity > 80 
            ? rain_url
            : info.temp > 15 
            ? hot_url
            : cold_url
          }
          alt="Weather"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component={"span"}>
          <h6>city: {info.city}</h6>
           </Typography>
           <Typography variant="body2" color="text.secondary">
           <p>feelsLike: {info.feelsLike}</p>
           <p>humidity: {info.humidity}</p>
           <p>temp: {info.temp}</p>
           <p>tempmax: {info.tempMax}</p>
           <p>tempmin: {info.tempMin}</p>
           <p>weather:{info.weather}</p>
           </Typography>
           </CardContent>
           </CardActionArea>
           </Card>
       
    )
}
export default InfoBox


