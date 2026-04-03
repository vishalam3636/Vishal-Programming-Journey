import { use, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "./radux/productSlice.js";
import products from "./data/products.json";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartItems);
  const productState = useSelector((state) => state.products);

  useEffect(() => {
    console.log(productState, ">>>>>productState in useEffect first");
    if (productState?.products?.length > 0) return;

    const timerId = setTimeout(() => {
      dispatch(addProduct(products));
    }, 2000);

    return () => clearTimeout(timerId);
  }, [dispatch, productState.products.length]);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartState));
  }, [cartState]);

  useEffect(() => {
    localStorage.setItem("productData", JSON.stringify(productState));
  }, [productState]);

  return (
    <>
      <div>
        <h1>Redux E-Commerce Cart</h1>
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
