import React from 'react'
import {Routes,Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/shared/Navbar'
import ProductID from './components/ProductID'
import ShoppingCart from './components/ShoppingCart'
import './App.css'



function App() {
  return (
  
    <>
    <Navbar/>
      <Routes> 
    
    <Route path='/products' element={<Home/>}/>
    <Route path='/shoppingCart' element={<ShoppingCart/>}/>
    <Route path='/products/:id' element={<ProductID/>}/>
    <Route path='/' element={<Navigate to="/products"/>}/>
    <Route path='*' element={<Navigate to="/products"/>}/>
    
  </Routes> 
    </>
   
  
  )
}

export default App