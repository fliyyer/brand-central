import { configureStore } from '@reduxjs/toolkit';
import popImgReducer from './Slice/popImgSlice';

const store = configureStore({
  reducer: {
    popImg: popImgReducer,
  },
});

export default store;
