import {createSlice} from "@reduxjs/toolkit";

const PRODUCT_STORAGE_KEY = "productData";

const initialState = {
    products: []
}

const loadProductState = () => {
    try {
        const savedProducts = localStorage.getItem(PRODUCT_STORAGE_KEY);
        if (!savedProducts) return initialState;

        const parsedProducts = JSON.parse(savedProducts);
        return {
            products: Array.isArray(parsedProducts.products) ? parsedProducts.products : []
        };
    } catch {
        return initialState;
    }
};

const persistedInitialState = loadProductState();

const productSlice = createSlice({
    name: "products",
    initialState: persistedInitialState,
    reducers:{
        addProduct: (state, action) => {
            state.products = [...action.payload]
        },
        decrementStock: (state, action) => {
            let ifItemExists = state.products.find((item) => item.id === action.payload.id);
            if(!ifItemExists) return;

            const qty = action.payload.quantity || 1
            ifItemExists.stock-=qty;
        },
        incrementStock: (state, action) => {
            let ifItemExists = state.products.find((item) => item.id === action.payload.id);
            if(!ifItemExists) return;

            const qty = action.payload.quantity
            ifItemExists.stock+=qty;
        }
    }
})

export const {addProduct, decrementStock, incrementStock} = productSlice.actions;
export default productSlice.reducer;