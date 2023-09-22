import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  weather: {
    name: '',
  },
  isLoading: false,
  error: '',
  format: 0,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeFormat(state, action) {
      state.format = action.payload;
    },
    weatherFetching(state) {
      state.isLoading = true;
    },
    photosFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = '';
      state.weather = action.payload;
    },
    photosFetchingFail(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.weather = {name: ''};
    },
  },
});

export default weatherSlice.reducer;
