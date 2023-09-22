import {combineReducers, configureStore} from '@reduxjs/toolkit';
import weatherReducer from './reducers/WeatherSlice';

export const rootReducer = combineReducers({
  weatherReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
