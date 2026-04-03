import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  cartItems: [],
  totalPrice: 0,
  totalItem: 0,
};

const localState = () => {
  try {
    const savedCart = localStorage.getItem("cartData");
    if (!savedCart) return defaultState;

    const parsedCart = JSON.parse(savedCart);

    return {
      cartItems: Array.isArray(parsedCart.cartItems)
        ? parsedCart.cartItems
        : [],
      totalItem: Number(parsedCart.totalItem),
      totalPrice: Number(parsedCart.totalPrice),
    };
  } catch {
    return defaultState;
  }
};

const initialState = localState();

const cartSlice = createSlice({
  name: "CartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (itemExists) {
        itemExists.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.totalItem += 1;
      state.totalPrice += action.payload.price;
    },
    decrementFromCart: (state, action) => {
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (!itemExists) return;

      itemExists.quantity -= 1;
      state.totalItem -= 1;
      state.totalPrice -= action.payload.price;

      if (itemExists.quantity <= 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        );
      }
    },
    removeItem: (state, action) => {
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (!itemExists) return;

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalItem = 0;
    },
  },
});

export const { addToCart, decrementFromCart, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
