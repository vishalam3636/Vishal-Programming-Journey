import { useEffect } from 'react';
import {useDispatch} from "react-redux";
import './App.css'
import Home from './pages/Home';
import Cart from './pages/Cart';
import products from "./data/products.json";
import { addProduct } from './redux/productSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(addProduct(products))
    }, 1000)

    return () => clearTimeout(timerId);
  }, [dispatch])
  return (
    <>
      <h1>React Redux Cart (Home All Working, cart pending)</h1>
      <div style={{display:"flex", gap:"50px", justifyContent:"space-between"}}>
          <Home />
          <Cart />
      </div>
    </>
  )
}

export default App;
