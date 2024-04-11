import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from "./auth_reducers";

export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
  },
});
