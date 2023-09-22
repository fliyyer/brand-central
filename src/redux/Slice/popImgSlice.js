import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const popImgSlice = createSlice({
  name: 'popImg',
  initialState,
  reducers: {
    openPopup: (state) => {
      state.isOpen = true;
    },
    closePopup: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openPopup, closePopup } = popImgSlice.actions;
export const selectIsPopupOpen = (state) => state.popImg.isOpen;
export default popImgSlice.reducer;
