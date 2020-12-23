import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeReducer from '../features/home/HomeSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
  },
});
