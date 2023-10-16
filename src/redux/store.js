import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Slice/authSlice';
import documentSlice from './Slice/documentSlice';
import userSlice from './Slice/userSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    documents: documentSlice,
    user: userSlice,
  },
});

export default store;
