import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  cartItems: [],
  totalItem: 0,
  totalPrice: 0,
};

const loadCartState = () => {
  try {
    const savedCartItems = localStorage.getItem("cartData");
    if (!savedCartItems) return defaultState;

    const parsedCardData = JSON.parse(savedCartItems);
    return {
      cartItems: Array.isArray(parsedCardData.cartItems)
        ? parsedCardData.cartItems
        : [],
      totalItem: Number(parsedCardData.totalItem) || 0,
      totalPrice: Number(parsedCardData.totalPrice) || 0,
    };
  } catch {
    return defaultState;
  }
};

const initialState = loadCartState();

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemExists = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (isItemExists) {
        isItemExists.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.totalItem += 1;
      state.totalPrice += action.payload.price;
    },
    decrementFromCart: (state, action) => {
      const isItemExists = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (!isItemExists) return;

      isItemExists.quantity -= 1;
      state.totalItem -= 1;
      state.totalPrice -= action.payload.price;

      if (isItemExists.quantity <= 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        );
      }
    },
  },
});

export const { addToCart, decrementFromCart } = cartSlice.actions;
export default cartSlice.reducer;
