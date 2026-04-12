import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalItem: 0*1,
    totalPrice: 0*1
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExists = state.cartItems.find(item => item.id === action.payload.id);
            
            if(isExists){
                isExists.quantity+=1
            }else{
                state.cartItems.push({...action.payload, quantity: 1})
            }

            state.totalItem+=1;
            state.totalPrice+=action.payload.price
        },
        decrementFromCart: (state, action) => {
            const existingItems = state.cartItems.find(item => item.id == action.payload.id);
            if(!existingItems) return;

            existingItems.quantity-=1;
            state.totalItem-=1;
            state.totalPrice-=action.payload.price;

            if(existingItems.quantity<=0){
               state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            }
        },
    }
})

export const {addToCart, decrementFromCart} = cartSlice.actions;
export default cartSlice.reducer;