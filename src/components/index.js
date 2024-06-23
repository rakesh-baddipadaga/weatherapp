import { combineReducers } from 'redux';
import weatherReducer from '../reducers/reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;

