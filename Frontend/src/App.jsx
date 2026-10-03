import React from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Shop from './pages/Shop'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductsDetails from './pages/ProductsDetails'
import ForgotPassword from './pages/ForgotPassword'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/product/:id" element={<ProductsDetails/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App