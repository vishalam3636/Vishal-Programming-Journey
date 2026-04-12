import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const itemExists = state.cartItems.find(item => item.id === action.payload.id);

            if(itemExists){
                itemExists.quantity+=1
            }else{
                state.cartItems.push({...action.payload, quantity: 1})
            }
        },
        decrementFromCart: (state, action) => {
            const itemExists = state.cartItems.find(item => item.id === action.payload.id);
            if(!itemExists) return;

            itemExists.quantity-=1;
            state.totalItems-=1;
            state.totalPrice-=itemExists.price;

            if(itemExists.quantity<=0){
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
            }
        },
        removeItemFromCart: (state, action) => {
            const itemExists = state.cartItems.find(item => item.id === action.payload.id);
            if(!itemExists) return;

            if(itemExists){
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            }
        }
    }
})

export const {addToCart, decrementFromCart, removeItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;