import { use, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "./redux/productSlice.js";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import products from "./data/products.json";

function App() {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);
  const cartState = useSelector((state) => state.cartItems);

  useEffect(() => {
    if (productState.products.length > 0) return;

    const timerId = setTimeout(() => {
      dispatch(addProduct(products));
    }, 2000);
  });

  useEffect(() => {
    localStorage.setItem("productData", JSON.stringify(productState));
  }, [productState]);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartState));
  }, [cartState]);
  return (
    <>
      <div>
        <h1>Reduc E-Commerce Cart</h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "50px",
          justifyContent: "space-between",
        }}
      >
        <Home />
        <Cart />
      </div>
    </>
  );
}

export default App;
