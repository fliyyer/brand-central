import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {
      title: 'Dijual',
      agentName: '',
      agentPhone: '',
      agentEmail: '',
      agentOfficePhone: '',
      officeName: '',
      officeWebsite: '',
      defaultImg: '',
    },
    endpoint: 'banner3',
  },
  reducers: {
    setEndpoint: (state, action) => {
      state.endpoint = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        console.error("Terjadi kesalahan dalam mengambil data:", action.error.message);
      });
  },
});

export const { setEndpoint } = userSlice.actions;

export const fetchUserData = createAsyncThunk('user/fetchUserData', async (endpoint, { dispatch }) => {
  try {
    const response = await axios.get(
      `https://brandcentralapi.raywhite.co.id/${endpoint}/create`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      const dataUser = response.data.row;
      const userData = {
        title: 'Dijual',
        agentName: dataUser.agent_name,
        agentPhone: dataUser.agent_mobile,
        agentEmail: dataUser.agent_email,
        agentOfficePhone: dataUser.agent_phone,
        officeName: dataUser.agent_office,
        officeWebsite: dataUser.website,
        defaultImg: dataUser.image_url1,
      };
      return userData;
    } else {
      throw new Error("Eror ambil data");
    }
  } catch (error) {
    throw new Error("Terjadi kesalahan: " + error.message);
  }
});

export default userSlice.reducer;
