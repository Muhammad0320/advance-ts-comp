import { configureStore, createSlice } from "@reduxjs/toolkit";

configureStore({
  reducer: {
    cart: createSlice,
  },
});
