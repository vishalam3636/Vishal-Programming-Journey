import { use, useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from "react-redux";
import { addProducts } from './redux/productsSlice';
import Home from './pages/Home';
import productsData from './data/products.json';
import Cart from './pages/Cart';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate API call with setTimeout
    const fetchProducts = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Dispatch the data
        dispatch(addProducts(productsData));
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);
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
