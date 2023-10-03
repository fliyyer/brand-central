import { createSlice, createSelector } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        error: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.token = action.payload;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.user = null;
            state.token = null;
            state.error = action.payload;
        }
    }
})

export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = createSelector(
  selectUser,
  (user) => !!user
);

export const { loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;