import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getTokenFromStorage = () => {
  return sessionStorage.getItem('token');
};

export const fetchDocuments = createAsyncThunk('documents/fetchDocuments', async (_, { getState }) => {
  const token = getTokenFromStorage();
  if (!token) {
    throw new Error('Token not found');
  }
  const response = await axios.get(
    'https://brandcentralapi.raywhite.co.id/document/list?id_db_document=&office&name&s=c.create_time&d=desc&page=4&perpage=50',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
});

const documentSlice = createSlice({
  name: 'documents',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocuments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchDocuments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default documentSlice.reducer;
