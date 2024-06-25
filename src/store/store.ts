import { configureStore, createSlice } from "@reduxjs/toolkit";
import { CartReducer } from "./CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer.reducer,
  },
});


 export type AppDispatch = typeof store.dispatch;

export type RootSate = ReturnType<typeof store.getState>;
