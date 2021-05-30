import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
// store.js the file that takes care of all the global estates and has them in this central place
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
