import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Profile from './components/Profile'
import ProductIndex from './components/ProductIndex'
import ProductShow from './components/ProductShow'
import Bag from './components/Bag'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/browse/:id' element={<ProductShow />} />
        <Route exact path='/browse' element={<ProductIndex />} />
        <Route path='/orders' element={<Bag />} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App


