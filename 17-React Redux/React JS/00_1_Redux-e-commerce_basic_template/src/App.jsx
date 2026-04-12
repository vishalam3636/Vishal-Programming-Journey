import { use, useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
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
