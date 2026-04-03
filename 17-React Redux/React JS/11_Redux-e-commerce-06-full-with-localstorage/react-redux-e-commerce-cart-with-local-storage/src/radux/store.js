import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";
import productSlice from "./productSlice.js";


export const store = configureStore({
    reducer:{
        products: productSlice,
        cartItems: cartSlice
    }
})