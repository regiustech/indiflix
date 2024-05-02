import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from "./auth/auth_reducers";

export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
  },
});
