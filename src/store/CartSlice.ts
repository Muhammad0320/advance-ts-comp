import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 export type CartData = {
   id: string;
   title: string;
   price: number;
 };

 type CartItem = CartData & {
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
     addToCart(state, action: PayloadAction< CartData >) {
       const itemIndex = state.cart.findIndex(
         (item) => item.id === action.payload.id
       );

       if (itemIndex >= 0) {
         state.cart[itemIndex].quantity++;
       } else {
         state.cart.push({ ...action.payload, quantity: 1 });
       }
     },

     removeFromCart(state, action: PayloadAction<string>) {
       const itemIndex = state.cart.findIndex(
         (item) => item.id === action.payload
       );

       if (state.cart[itemIndex].quantity === 1) {
         state.cart.splice(itemIndex, 1);
       } else {
         state.cart[itemIndex].quantity--;
       }
     },
   },
 });

 export const { addToCart, removeFromCart } = CartReducer.actions;