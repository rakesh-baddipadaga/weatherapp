import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

const WeeklyForecast = ({ weekly }) => {
  return (
    <div className="weekly-forecast">
      <Typography variant="h5" gutterBottom>
        Weekly Forecast
      </Typography>
      <Grid container spacing={2}>
        {weekly.map((day, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card component={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <CardContent style={{ background: 'linear-gradient(135deg, #f6d365 30%, #fda085 90%)', borderRadius: '10px' }}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {format(new Date(day.date), 'dd MMM yyyy')}
                </Typography>
                <Typography variant="h6" component="p">
                  Min: {Math.round(day.temp_min)}°C
                </Typography>
                <Typography variant="h6" component="p">
                  Max: {Math.round(day.temp_max)}°C
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {day.weather.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WeeklyForecast;




























// import React from 'react';
// import { Card, CardContent, Grid, Typography } from '@mui/material';
// import { format } from 'date-fns';

// const WeeklyForecast = ({ weekly }) => {
//   return (
//     <div className="weekly-forecast">
//       <Typography variant="h5" gutterBottom>
//         Weekly Forecast
//       </Typography>
//       <Grid container spacing={2}>
//         {weekly.map((day, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card>
//               <CardContent>
//                 <Typography variant="body2" color="textSecondary" gutterBottom>
//                   {format(new Date(day.date), 'dd MMM yyyy')}
//                 </Typography>
//                 <Typography variant="h6" component="p">
//                   Min: {Math.round(day.temp_min)}°C
//                 </Typography>
//                 <Typography variant="h6" component="p">
//                   Max: {Math.round(day.temp_max)}°C
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {day.weather.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default WeeklyForecast;
























// import React from 'react';

// const WeeklyForecast = ({ weekly }) => {
//   return (
//     <div className="weekly-forecast">
//       <h3>Weekly Forecast</h3>
//       <div className="forecast-cards">
//         {weekly.map((day, index) => (
//           <div key={index} className="forecast-card">
//             <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
//             <p>Min: {Math.round(day.temp_min )}°C</p>
//             <p>Max: {Math.round(day.temp_max )}°C</p>
//             <p>{day.weather.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WeeklyForecast;
