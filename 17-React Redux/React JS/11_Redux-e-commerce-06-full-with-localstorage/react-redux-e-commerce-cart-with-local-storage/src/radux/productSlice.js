import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  products: [],
};

const localState = () => {
  try {
    const savedProduct = localStorage.getItem("productData");
    if (!savedProduct) return defaultState;

    const parsedProduct = JSON.parse(savedProduct);
    return {
      products: Array.isArray(parsedProduct.products)
        ? parsedProduct.products
        : [],
    };
  } catch {
    return defaultState;
  }
};

const initialState = localState();

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...action.payload];
    },
    decrementStock: (state, action) => {
      const itemExists = state.products.find(
        (item) => item.id === action.payload.id,
      );
      if (!itemExists) return;

      const qty = action.payload.quantity || 1;
      itemExists.stock -= qty;
    },
    incrementStock: (state, action) => {
      const itemExists = state.products.find(
        (item) => item.id === action.payload.id,
      );
      if (!itemExists) return;

      const qty = action.payload.quantity;
      itemExists.stock += qty;
    },
  },
});

export const { addProduct, decrementStock, incrementStock } =
  productSlice.actions;
export default productSlice.reducer;
