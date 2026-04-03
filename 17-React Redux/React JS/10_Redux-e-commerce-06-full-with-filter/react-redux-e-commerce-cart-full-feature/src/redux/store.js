import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice.js";

export const store = configureStore({
    reducer:{
        products: productSlice,
        cartItems: cartSlice
    }
})