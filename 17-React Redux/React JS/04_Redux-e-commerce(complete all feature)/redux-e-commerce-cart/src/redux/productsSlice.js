import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    filters: {
        title: "",
        category: "all"
    }
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        addProducts: (state, action) => {
            state.products = [...action.payload]
            console.log(state.products, ">>>products in product slice")
        },
        setFilters: (state, action) => {
            state.filters = {
                ...state.filters,
                ...action.payload
            };
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

export const {addProducts, setFilters, decrementStock, incrementStock} = productsSlice.actions;
export default productsSlice.reducer;