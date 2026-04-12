import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        addProduct: (state, action) => {
            state.products = [...action.payload]
        },
        decrementStock: (state,action) =>{
            const product = state.products.find(item => item.id === action.payload.id);
            if(!product) return;

            const qty = action.payload.quantity || 1;
            product.stock = Math.max(0, product.stock-qty);
        },
        incrementStock: (state, action) => {
            const product = state.products.find(item => item.id === action.payload.id);
            if(!product) return;

            const qty = action.payload.quantity || 1;
            product.stock+=qty;
        }
    }
})

export const {addProduct, decrementStock, incrementStock} = productSlice.actions;
export default productSlice.reducer;
