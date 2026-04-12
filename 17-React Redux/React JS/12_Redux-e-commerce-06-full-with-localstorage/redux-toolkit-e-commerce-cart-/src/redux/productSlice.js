import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  products: [],
};

const loadProductState = () => {
  try {
    const savedProducts = localStorage.getItem("productData");
    if (!savedProducts) return defaultState;

    const parsedProducts = JSON.parse(savedProducts);

    return {
      products: Array.isArray(parsedProducts.products)
        ? parsedProducts.products
        : [],
    };
  } catch {
    return defaultState;
  }
};

const initialState = loadProductState();

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...action.payload];
    },
    decrementStock: (state, action) => {
      const ifItemExists = state.products.find(
        (item) => item.id === action.payload.id,
      );

      if (!ifItemExists) return;

      const qty = action.payload.quantity || 1;
      ifItemExists.stock -= qty;
    },
    incrementStock: (state, action) => {
      const ifItemExists = state.products.find(
        (item) => item.id === action.payload.id,
      );

      if (!ifItemExists) return;

      const qty = action.payload.quantity;
      ifItemExists.stock += qty;
    },
  },
});

export const { addProduct, decrementStock, incrementStock } =
  productSlice.actions;
export default productSlice.reducer;
