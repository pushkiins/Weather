import axios from 'axios';
import {weatherSlice} from './WeatherSlice';
import {openweathermap_api_key} from '../../../config.json';

export const fetchWeather = city => async dispatch => {
  try {
    dispatch(weatherSlice.actions.weatherFetching());
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&dt=5&appid=${openweathermap_api_key}`,
    );
    dispatch(weatherSlice.actions.photosFetchingSuccess(response.data));
  } catch (e) {
    dispatch(weatherSlice.actions.photosFetchingFail(e.message));
  }
};

export const fetchWeatherByLongLat = (lat, lon) => async dispatch => {
  try {
    dispatch(weatherSlice.actions.weatherFetching());
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${openweathermap_api_key}`,
    );
    dispatch(weatherSlice.actions.photosFetchingSuccess(response.data));
  } catch (e) {
    dispatch(weatherSlice.actions.photosFetchingFail(e.message));
  }
};
