import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

const HourlyForecast = ({ hourly }) => {
  // Filter and sort the hourly array by dt (timestamp)
  const filteredHourly = hourly.slice(0, 12); // Display only the next 12 hours

  return (
    <div className="hourly-forecast">
      <Typography variant="h5" gutterBottom>
        Hourly Forecast
      </Typography>
      <Grid container spacing={2}>
        {filteredHourly.map((hour, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card component={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <CardContent style={{ background: 'linear-gradient(135deg, #f6d365 30%, #fda085 90%)', borderRadius: '10px' }}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {format(new Date(hour.dt * 1000), 'HH:mm')}
                </Typography>
                <Typography variant="h6" component="p">
                  {hour.main && hour.main.temp ? `${Math.round(hour.main.temp)}°C` : 'Temperature unavailable'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {hour.weather && hour.weather[0] && hour.weather[0].description ? hour.weather[0].description : 'Weather description unavailable'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HourlyForecast;

























// import React from 'react';
// import { Typography, Card, CardContent, Grid } from '@mui/material';
// import { format } from 'date-fns'; // Importing date-fns for date formatting

// const HourlyForecast = ({ hourly }) => {
//     console.log(hourly);
//   return (
//     <div className="hourly-forecast">
//       <Typography variant="h5" gutterBottom>
//         Hourly Forecast
//       </Typography>
//       <Grid container spacing={2}>
//         {hourly.slice(0, 12).map((hour, index) => (
//           <Grid item xs={6} sm={3} key={index}>
//             <Card>
//               <CardContent>
//                 <Typography variant="body2" color="textSecondary" gutterBottom>
//                   {format(new Date(hour.dt * 1000), 'HH:mm')}
//                 </Typography>
//                 <Typography variant="h6" component="p">
//                   {hour.temp ? `${Math.round(hour.temp - 273.15)}°C` : 'Temperature unavailable'}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {hour.weather && hour.weather[0] && hour.weather[0].description ? hour.weather[0].description : 'Weather description unavailable'}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default HourlyForecast;
