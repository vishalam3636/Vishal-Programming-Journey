import { use, useState, useEffect } from 'react'
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import products from "./data/products.json";
import { useDispatch } from 'react-redux';
import {addProduct} from "./redux/productSlice.js";

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    const timerId = setTimeout(()=>{
      dispatch(addProduct(products));
    })

    return ()=>clearTimeout(timerId);
  }, [dispatch])
  
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
