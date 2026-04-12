import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addProduct:(state, action) => {
            state.products = [...action.payload]
        },
        decrementStock: (state, action) => {
            const itemExists = state.products.find(item => item.id === action.payload.id);
            if(!itemExists) return;

            const qty = action.payload.quantity || 1;
            itemExists.stock-=qty
        },
        incrementStock: (state, action) => {
            const itemExists = state.products.find(item => item.id === action.payload.id);
            if(!itemExists) return;

            const qty = action.payload.quantity || 1;
            itemExists.stock+=qty;
        }
    }
})

export const {addProduct, decrementStock, incrementStock} = productSlice.actions;
export default productSlice.reducer;