import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const WeatherCard = ({ weather }) => {
  return (
    <Card component={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ marginBottom: '20px' }}>
      <CardContent style={{ background: 'linear-gradient(135deg, #74ebd5 30%, #ACB6E5 90%)', borderRadius: '10px' }}>
        <Typography variant="h5" component="div" gutterBottom>
          {weather.name}
        </Typography>
        <Typography variant="h6" component="p">
          Temperature: {Math.round(weather.main.temp)}°C
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Humidity: {weather.main.humidity}%
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Weather: {weather.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;

