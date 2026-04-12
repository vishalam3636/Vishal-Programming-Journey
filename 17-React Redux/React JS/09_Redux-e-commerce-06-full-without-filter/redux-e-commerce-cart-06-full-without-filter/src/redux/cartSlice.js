import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const itemExists = state.cartItems.find(item => item.id === action.payload.id);

            if(itemExists){
                itemExists.quantity+=1;
            }else{
                state.cartItems.push({...action.payload, quantity:1});
            }

            state.totalItems+=1;
            state.totalPrice+=action.payload.price;
        },
        decrementFromCart: (state, action) => {
            const itemExists = state.cartItems.find(item => item.id === action.payload.id);
            if(!itemExists) return;

            itemExists.quantity-=1;
            state.totalItems-=1;
            state.totalPrice-=itemExists.price;

            if(itemExists.quantity<=0){
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            }
        },
        removeFromCart: (state, action) => {
            const itemExists = state.cartItems.find(item => item.id === action.payload.id);
            if(!itemExists) return;

            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        }
    }
})

export const {addToCart, decrementFromCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;