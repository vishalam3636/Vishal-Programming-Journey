import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalItem: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const ifItemExists = state.cartItems.find(item => item.id == action.payload.id);
            if(ifItemExists){
                ifItemExists.quantity+=1
            }else{
                state.cartItems.push({...action.payload, quantity:1})
            }

            state.totalItem += 1;
            state.totalPrice += action.payload.price;
        },
        decrementFromCart: (state, action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (!existingItem) return;

            existingItem.quantity -= 1;
            state.totalItem -= 1;
            state.totalPrice -= existingItem.price;

            if (existingItem.quantity <= 0) {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            }
        }
    }
})

export const {addToCart, decrementFromCart} = cartSlice.actions;
export default cartSlice.reducer;
