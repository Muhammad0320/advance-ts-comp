import { configureStore, createSlice } from "@reduxjs/toolkit";

 export const store = configureStore({
   reducer: {
     cart: createSlice,
   },
 });


 export type AppDispatch = typeof store.dispatch;

export type RootSate = ReturnType<typeof store.getState>;