import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Slice/authSlice';
import documentSlice from './Slice/documentSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    documents: documentSlice,
  },
});

export default store;
