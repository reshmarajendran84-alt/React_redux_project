// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer, // ✅ key must match your selector
  },
});

export default store;
