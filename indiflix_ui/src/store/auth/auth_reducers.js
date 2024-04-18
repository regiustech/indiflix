import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetail: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAuth: (state, action) => {
      state.userDetail = action.payload;
    },
    logoutAuth: (state) => {
      state.userDetail = {};
    },
  },
})

export const { loginAuth, logoutAuth } = authSlice.actions;
export default authSlice.reducer;
