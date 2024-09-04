import { useState } from 'react'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import Layout from './components/Layout'
import Cart from './components/Cart'
import PlaceOrder from './components/placeorder/PlaceOrder'
import ContactUs from './components/contactus/ContactUs'

function App() {

  return (
    <div className='app'>
     
      <Routes>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/placeorder' element={<PlaceOrder/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}></Route>
        </Route>
      </Routes>
    </div>
  ) 
}

export default App
