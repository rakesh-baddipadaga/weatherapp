import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, fetchHourlyForecast, fetchWeeklyForecast } from '../actions/actions';
import WeatherCard from './weathercard';
import HourlyForecast from './hourlyforecast';
import WeeklyForecast from './weeklyforecast';
import SearchHistory from './searchhistory';
import Alert from './alert';
import PersonalizedWeatherAdvice from './weatheradvice';
import { Container, TextField, Button, Typography, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { motion } from 'framer-motion';
import '../styles.css'; // Import your CSS file

const WeatherDashboard = () => {
  const [city, setCity] = useState('Delhi');
  const [history, setHistory] = useState([]);
  const [userGroup, setUserGroup] = useState('travelers'); // Default user group
  const [activeSection, setActiveSection] = useState('weather'); // Default active section
  const dispatch = useDispatch();

  const weatherState = useSelector((state) => state.weather);
  const { loading, weather, hourly, weekly, error } = weatherState;

  useEffect(() => {
    if (weather) {
      const { coord } = weather;
      dispatch(fetchWeeklyForecast({ lat: coord.lat, lon: coord.lon }));
    }
  }, [weather, dispatch]);

  useEffect(() => {
    dispatch(fetchWeather(city));
    dispatch(fetchHourlyForecast(city));
  }, [city, dispatch]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchWeather(city));
    dispatch(fetchHourlyForecast(city));
    setHistory([city, ...history.filter((c) => c !== city).slice(0, 4)]);
  };

  const handleUserGroupChange = (e) => {
    setUserGroup(e.target.value);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'weather':
        return <WeatherCard weather={weather} />;
      case 'hourly':
        return <HourlyForecast hourly={hourly} />;
      case 'weekly':
        return <WeeklyForecast weekly={weekly} />;
      case 'advice':
        return <PersonalizedWeatherAdvice userGroup={userGroup} weather={weather} />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" className="weather-dashboard">
      <Box my={4} textAlign="center">
        <Typography variant="h2" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Weather Dashboard
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" my={2}>
          <TextField 
            label="City" 
            value={city} 
            onChange={handleCityChange} 
            variant="outlined"
            className="search-input"
          />
          <Button variant="contained" color="primary" onClick={handleSearch} className="search-button">
            Get Weather
          </Button>
        </Box>
        <FormControl variant="outlined" className="user-group-select">
          <InputLabel>User Group</InputLabel>
          <Select value={userGroup} onChange={handleUserGroupChange} label="User Group">
            <MenuItem value="eventPlanners">Event Planners</MenuItem>
            <MenuItem value="farmers">Farmers</MenuItem>
            <MenuItem value="travelers">Travelers</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <SearchHistory history={history} onSelect={setCity} />
      {loading ? (
        <Typography variant="h6" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Loading...
        </Typography>
      ) : error ? (
        <Typography variant="h6" color="error" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {error}
        </Typography>
      ) : (
        weather && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box my={4} className="section-buttons">
              <Button onClick={() => handleSectionChange('weather')} variant="contained" color="primary" className="section-button">
                Weather
              </Button>
              <Button onClick={() => handleSectionChange('hourly')} variant="contained" color="primary" className="section-button">
                Hourly Forecast
              </Button>
              <Button onClick={() => handleSectionChange('weekly')} variant="contained" color="primary" className="section-button">
                Weekly Forecast
              </Button>
              <Button onClick={() => handleSectionChange('advice')} variant="contained" color="primary" className="section-button">
                Weather Advice
              </Button>
            </Box>
            {renderActiveSection()}
          </motion.div>
        )
      )}
      <Alert weather={weather} />
    </Container>
  );
};

export default WeatherDashboard;





















// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeather, fetchHourlyForecast, fetchWeeklyForecast } from '../actions/actions';
// import WeatherCard from './weathercard';
// import HourlyForecast from './hourlyforecast';
// import WeeklyForecast from './weeklyforecast';
// import SearchHistory from './searchhistory';
// import Alert from './alert';
// import PersonalizedWeatherAdvice from './weatheradvice';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';
// import { motion } from 'framer-motion';


// const WeatherDashboard = () => {
//   const [city, setCity] = useState('Delhi');
//   const [history, setHistory] = useState([]);
//   const dispatch = useDispatch();

//   const weatherState = useSelector((state) => state.weather);
//   const { loading, weather, hourly, weekly, error } = weatherState;

//   useEffect(() => {
//     if (weather) {
//       const { coord } = weather;
//       dispatch(fetchWeeklyForecast({ lat: coord.lat, lon: coord.lon }));
//     }
//   }, [weather, dispatch]);

//   useEffect(() => {
//     dispatch(fetchWeather(city));
//     dispatch(fetchHourlyForecast(city));
//   }, [city, dispatch]);

//   const handleCityChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleSearch = () => {
//     dispatch(fetchWeather(city));
//     dispatch(fetchHourlyForecast(city));
//     setHistory([city, ...history.filter((c) => c !== city).slice(0, 4)]);
//   };

//   return (
//     <div className="weather-dashboard">
//       <Box textAlign="center" my={4}>
//         <Typography variant="h2" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           Weather Dashboard
//         </Typography>
//         <Box display="flex" flexDirection="column" alignItems="center" my={2}>
//           <TextField 
//             label="City" 
//             value={city} 
//             onChange={handleCityChange} 
//             variant="outlined"
//             style={{ marginBottom: '10px', background: '#fff', borderRadius: '5px' }}
//           />
//           <Button variant="contained" color="primary" onClick={handleSearch}>
//             Get Weather
//           </Button>
//         </Box>
//       </Box>
//       <SearchHistory history={history} onSelect={setCity} />
//       {loading ? (
//         <Typography variant="h6" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           Loading...
//         </Typography>
//       ) : error ? (
//         <Typography variant="h6" color="error" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           {error}
//         </Typography>
//       ) : (
//         weather && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//             <WeatherCard weather={weather} />
//             <HourlyForecast hourly={hourly} />
//             <WeeklyForecast weekly={weekly} />
//           </motion.div>
//         )
//       )}
//       <Alert weather={weather} />
//     </div>
//   );
// };

// export default WeatherDashboard;





























// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeather, fetchHourlyForecast, fetchWeeklyForecast } from '../actions/actions';
// import WeatherCard from './weathercard';
// import HourlyForecast from './hourlyforecast';
// import WeeklyForecast from './weeklyforecast';
// import SearchHistory from './searchhistory';
// import Alert from './alert';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';
// import { motion } from 'framer-motion';

// const WeatherDashboard = () => {
//   const [city, setCity] = useState('Delhi');
//   const [history, setHistory] = useState([]);
//   const dispatch = useDispatch();

//   const weatherState = useSelector((state) => state.weather);
//   const { loading, weather, hourly, weekly, error } = weatherState;

//   useEffect(() => {
//     if (weather) {
//       const { coord } = weather;
//       dispatch(fetchWeeklyForecast({ lat: coord.lat, lon: coord.lon }));
//     }
//   }, [weather, dispatch]);

//   useEffect(() => {
//     dispatch(fetchWeather(city));
//     dispatch(fetchHourlyForecast(city));
//   }, [city, dispatch]);

//   const handleCityChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleSearch = () => {
//     dispatch(fetchWeather(city));
//     dispatch(fetchHourlyForecast(city));
//     setHistory([city, ...history.filter((c) => c !== city).slice(0, 4)]);
//   };

//   return (
//     <Container>
//       <Box textAlign="center" my={4}>
//         <Typography variant="h2" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           Weather Dashboard
//         </Typography>
//         <Box display="flex" flexDirection="column" alignItems="center" my={2}>
//           <TextField 
//             label="City" 
//             value={city} 
//             onChange={handleCityChange} 
//             variant="outlined"
//             style={{ marginBottom: '10px',
//                background: '#fff', 
//                borderRadius: '5px' }}
//           />
//           <Button variant="contained" color="primary" onClick={handleSearch}>
//             Get Weather
//           </Button>
//         </Box>
//       </Box>
//       <SearchHistory history={history} onSelect={setCity} />
//       {loading ? (
//         <Typography variant="h6" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           Loading...
//         </Typography>
//       ) : error ? (
//         <Typography variant="h6" color="error" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           {error}
//         </Typography>
//       ) : (
//         weather && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//             <WeatherCard weather={weather} />
//             <HourlyForecast hourly={hourly} />
//             <WeeklyForecast weekly={weekly} />
//           </motion.div>
//         )
//       )}
//       <Alert weather={weather} />
//     </Container>
//   );
// };

// export default WeatherDashboard;






















// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeather, fetchHourlyForecast, fetchWeeklyForecast } from '../actions/actions';
// import WeatherCard from './weathercard';
// import HourlyForecast from './hourlyforecast';
// import WeeklyForecast from './weeklyforecast';
// import SearchHistory from './searchhistory';
// import Alert from './alert';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';

// const WeatherDashboard = () => {
//   const [city, setCity] = useState('Delhi');
//   const [history, setHistory] = useState([]);
//   const dispatch = useDispatch();

//   const weatherState = useSelector((state) => state.weather);
//   const { loading, weather, hourly, weekly, error } = weatherState;

//   useEffect(() => {
//     if (weather) {
//       const { coord } = weather;
//       dispatch(fetchWeeklyForecast({ lat: coord.lat, lon: coord.lon }));
//     }
//   }, [weather, dispatch]);

//   useEffect(() => {
//     dispatch(fetchWeather(city));
//     dispatch(fetchHourlyForecast(city));
//   }, [city, dispatch]);

//   const handleCityChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleSearch = () => {
//     dispatch(fetchWeather(city));
//     dispatch(fetchHourlyForecast(city));
//     setHistory([city, ...history.filter((c) => c !== city).slice(0, 4)]);
//   };

//   return (
//     <Container>
//       <Box textAlign="center" my={4}>
//         <Typography variant="h2">Weather Dashboard</Typography>
//         <TextField label="City" value={city} onChange={handleCityChange} />
//         <Button variant="contained" color="primary" onClick={handleSearch}>
//           Get Weather
//         </Button>
//       </Box>
//       <SearchHistory history={history} onSelect={setCity} />
//       {loading ? (
//         <Typography variant="h6">Loading...</Typography>
//       ) : error ? (
//         <Typography variant="h6" color="error">{error}</Typography>
//       ) : (
//         weather && (
//           <>
//             <WeatherCard weather={weather} />
//             <HourlyForecast hourly={hourly} />
//             <WeeklyForecast weekly={weekly} />
//           </>
//         )
//       )}
//       <Alert weather={weather} />
//     </Container>
//   );
// };

// export default WeatherDashboard;































// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeather } from './actions';
// import WeatherCard from './weathercard';
// import Alert from './alert';

// const WeatherDashboard = () => {
//   const [city, setCity] = useState('New York');
//   const dispatch = useDispatch();

//   const weatherState = useSelector((state) => state.weather);
//   const { loading, weather, error } = weatherState;

//   useEffect(() => {
//     dispatch(fetchWeather(city));
//   }, [city, dispatch]);

//   const handleCityChange = (e) => {
//     setCity(e.target.value);
//   };

//   return (
//     <div className="weather-dashboard">
//       <h1>Weather Dashboard</h1>
//       <input type="text" value={city} onChange={handleCityChange} />
//       <button onClick={() => dispatch(fetchWeather(city))}>Get Weather</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         weather && <WeatherCard weather={weather} />
//       )}
//       <Alert weather={weather} />
//     </div>
//   );
// };

// export default WeatherDashboard;

