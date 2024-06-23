import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather, fetchHourlyForecast, fetchWeeklyForecast } from '../actions/actions';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    loading: false,
    weather: null,
    hourly: [],
    weekly: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchHourlyForecast.fulfilled, (state, action) => {
        state.hourly = action.payload.list;
      })
      .addCase(fetchWeeklyForecast.fulfilled, (state, action) => {
        state.weekly = action.payload;
      });
  },
});

export default weatherSlice.reducer;

























// import { createSlice } from '@reduxjs/toolkit';
// import { fetchWeather } from './actions';

// const weatherSlice = createSlice({
//   name: 'weather',
//   initialState: {
//     loading: false,
//     weather: null,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchWeather.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchWeather.fulfilled, (state, action) => {
//         state.loading = false;
//         state.weather = action.payload;
//       })
//       .addCase(fetchWeather.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default weatherSlice.reducer;

  