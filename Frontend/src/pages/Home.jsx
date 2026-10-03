import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'



const Home =
 () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-yellow-100 text-pink-950 ">
      <Navbar/>
      <Hero/>
      <Footer/>
  
    </div>
  )
}

export default Home