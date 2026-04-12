import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./productsSlice.js"
import cartReducer from "./cartSlice.js"

export const store = configureStore({
    reducer: {
        products: productReducer,
        cartItems: cartReducer
    }
})