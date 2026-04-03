import {createSlice} from "@reduxjs/toolkit";

const CART_STORAGE_KEY = "cartData";

const defaultState = {
    cartItems:[],
    totalItem:0,
    totalPrice:0
};

const loadCartState = () => {
    try {
        const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
        if (!savedCart) return defaultState;

        const parsedCart = JSON.parse(savedCart);
        return {
            cartItems: Array.isArray(parsedCart.cartItems) ? parsedCart.cartItems : [],
            totalItem: Number(parsedCart.totalItem) || 0,
            totalPrice: Number(parsedCart.totalPrice) || 0
        };
    } catch {
        return defaultState;
    }
};

const initialState = loadCartState();

const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const ifItemExists = state.cartItems.find((item) => item.id === action.payload.id);

            
            if(ifItemExists){
                ifItemExists.quantity+=1
            }else{
                state.cartItems.push({...action.payload, quantity:1})
            }

            state.totalItem+=1;
            let price = Math.abs(Number(action.payload.price));
            state.totalPrice+=price;
        },
        decrementFromCart: (state, action) => {
            const ifItemExists = state.cartItems.find((item) => item.id === action.payload.id);
            if(!ifItemExists) return;

            ifItemExists.quantity-=1;
            state.totalItem-=1;
            let price = Math.abs(Number(ifItemExists.price));
            state.totalPrice-=price;

            if(ifItemExists.quantity<=0){
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            }
        },
        removeItemFromCart: (state, action) => {
            const ifItemExists = state.cartItems.find((item) => item.id === action.payload.id); 

            if(!ifItemExists) return;
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            state.totalItem-=ifItemExists.quantity;
            let price = Math.abs(Number(ifItemExists.price));
            state.totalPrice-=price*ifItemExists.quantity;
        }
    }
})

export const {addToCart, decrementFromCart, removeItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;