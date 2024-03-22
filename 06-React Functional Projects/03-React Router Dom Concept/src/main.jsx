import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';

// My
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='gallery' element={<Gallery />} />
    </Route>
  )
)

// // MD (Rough Tabs)
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />} >
//       <Route path='' element={<Home />} />
//       <Route path='grocery' element={<About />} />
//       <Route path='meat' element={<Contact />} />
//       <Route path='vegetable' element={<Gallery />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
