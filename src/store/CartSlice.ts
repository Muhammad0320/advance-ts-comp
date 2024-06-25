import { createSlice } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartType = {
  cart: CartItem[];
};

const initialState: CartType = {
  cart: [],
};

export const CartReducer = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCart() {},

    removeFromCard() {},
  },
});
