import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalInCart: 0,
    TotalPrice: 0
}

console.log(initialState.cartItems, ">>>>cartItem in cart slice")
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }

            state.totalInCart += 1;
            state.TotalPrice += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const itemToRemove = state.cartItems.find((item) => item.id === action.payload.id);
            if (!itemToRemove) return;

            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.totalInCart -= itemToRemove.quantity;
            state.TotalPrice -= itemToRemove.price * itemToRemove.quantity;
        },
        decrementFromCart: (state, action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (!existingItem) return;

            existingItem.quantity -= 1;
            state.totalInCart -= 1;
            state.TotalPrice -= existingItem.price;

            if (existingItem.quantity <= 0) {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            }
        }
    }
})

export const {addToCart, removeFromCart, decrementFromCart} = cartSlice.actions;
export default cartSlice.reducer;
