import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink200 via-rose-100 to-yellow-100 text-pink-950 ">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home