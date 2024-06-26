import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,{
        params:{units:'metric'}
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchHourlyForecast = createAsyncThunk(
  'weather/fetchHourlyForecast',
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`,{
        params:{units:'metric'}
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchWeeklyForecast = createAsyncThunk(
  'weather/fetchWeeklyForecast',
  async ({ lat, lon }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: {
          lat: lat,
          lon: lon,
          appid: `${apiKey}`, // Replace with your actual API key
          units: 'metric' // Use metric units for Celsius
        }
      });

      // Aggregate data to get daily forecasts
      const dailyData = {};
      response.data.list.forEach(item => {
        const date = format(new Date(item.dt * 1000), 'yyyy-MM-dd');
        if (!dailyData[date]) {
          dailyData[date] = {
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max,
            weather: item.weather[0],
            count: 1
          };
        } else {
          dailyData[date].temp_min = Math.min(dailyData[date].temp_min, item.main.temp_min);
          dailyData[date].temp_max = Math.max(dailyData[date].temp_max, item.main.temp_max);
          dailyData[date].count += 1;
        }
      });

      const dailyArray = Object.keys(dailyData).map(date => ({
        date,
        temp_min: dailyData[date].temp_min,
        temp_max: dailyData[date].temp_max,
        weather: dailyData[date].weather
      }));

      return dailyArray;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
















// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchWeather = createAsyncThunk(
//   'weather/fetchWeather',
//   async (city, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

