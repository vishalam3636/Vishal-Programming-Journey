import { use, useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import {addProduct} from "./redux/productSlice.js"
import products from "./data/products.json";

function App() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartItems);
  const productState = useSelector((state) => state.products);

  useEffect(()=>{
    if (productState.products.length > 0) return;

    const timerId = setTimeout(()=>{
      dispatch(addProduct(products));
    });

    return () => clearTimeout(timerId);
  }, [dispatch, productState.products.length])

  useEffect(() => {
    window.localStorage.setItem("cartData", JSON.stringify(cartState));
  }, [cartState]);

  useEffect(() => {
    window.localStorage.setItem("productData", JSON.stringify(productState));
  }, [productState]);

  return (
    <>
      <div><h1>Reduc E-Commerce Cart</h1></div>
      <div style={{display:"flex", gap:"50px", justifyContent:"space-between"}}>
        <Home />
        <Cart />
      </div>
    </>
  )
}

export default App
