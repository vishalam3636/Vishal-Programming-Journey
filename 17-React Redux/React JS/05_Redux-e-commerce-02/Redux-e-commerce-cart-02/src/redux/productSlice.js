import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    products: [],
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProducts: (state, action)=> {
            state.products=[...action.payload];
        },
        decrementStock: (state, action) => {
            const product = state.products.find((item) => item.id === action.payload.id);
            if (!product) return;

            const qty = action.payload.quantity || 1;
            product.stock = Math.max(0, product.stock - qty);
        },
        incrementStock: (state, action) => {
            const product = state.products.find((item) => item.id === action.payload.id);
            if (!product) return;

            const qty = action.payload.quantity || 1;
            product.stock += qty;
        }
    }
})

export const {addProducts, decrementStock, incrementStock} = productSlice.actions;
export default productSlice.reducer;