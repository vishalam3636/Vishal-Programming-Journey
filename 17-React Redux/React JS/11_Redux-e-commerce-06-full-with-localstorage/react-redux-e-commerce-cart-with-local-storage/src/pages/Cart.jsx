import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decrementFromCart,
  removeItem,
  clearCart,
} from "../radux/cartSlice.js";
import { incrementStock, decrementStock } from "../radux/productSlice.js";

export default function Cart() {
  const dispatch = useDispatch();

  const { cartItems, totalPrice, totalItem } = useSelector(
    (state) => state.cartItems,
  );
  const { products } = useSelector((state) => state.products);

  const handleClearCart = () => {
    for (let elem of cartItems) {
      dispatch(incrementStock({ id: elem.id, quantity: elem.quantity }));
    }
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>
        <button onClick={handleClearCart}>Clear Cart</button>
      </p>

      <div>
        <p>Total Items: {totalItem}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
      <div className="cartItemContaine">
        {cartItems.map((item) => {
          const currProducts = products.find(
            (currItem) => currItem.id === item.id,
          );
          return (
            <div className="cartItem" key={item.id}>
              <img src={item.thumbnail} />
              <p>Name: {item.title}</p>
              <p>Price: ${item.price}</p>
              <div>
                <button
                  onClick={() => {
                    dispatch(decrementFromCart(item));
                    dispatch(incrementStock(item));
                  }}
                >
                  -
                </button>
                <span>Quantity: {item.quantity}</span>
                <button
                  onClick={() => {
                    dispatch(addToCart(item));
                    dispatch(decrementStock(item));
                  }}
                  disabled={currProducts.stock <= 0}
                >
                  +
                </button>
              </div>
              <p>
                <button
                  onClick={() => {
                    dispatch(removeItem(item));
                    dispatch(
                      incrementStock({ id: item.id, quantity: item.quantity }),
                    );
                  }}
                >
                  Remove Item
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
