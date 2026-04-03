import { useState, useEffect } from 'react';
import './App.css'
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import {useDispatch} from "react-redux";
import products from "./data/products.json";
import { addProduct } from './redux/productSlice.js';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    const timerId = setTimeout(()=> {
      dispatch(addProduct(products))
    }, 2000)

    return ()=> clearTimeout(timerId)
  },[dispatch])
  return (
    <>
      <h1>React Redux Cart (Home All Working Feature)</h1>
      <div style={{display:"flex", gap:"50px", justifyContent:"space-between"}}>
          <Home />
          <Cart />
      </div>
    </>
  )
}

export default App;
