import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentDetails: {},
}

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    payment: (state, action) => {
      state.paymentDetails = action.payload;
    }
  }
})

export const { payments } = paymentSlice.actions;
export default paymentSlice.reducer;
