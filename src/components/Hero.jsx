import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo.svg'

// Unsplash page links (unsplash.com/photos/...) are web pages, not images.
// This turns a photo ID into a direct image link that works in <img src>.
const unsplash = (id) => `https://unsplash.com/photos/${id}/download?w=800`

const products = [
  {
    image: unsplash('PDX_a_82obo'),
    name: 'Premium Headphones',
    price: '₹2,499',
    rating: '4.8',
  },
  {
    image: unsplash('6wdRuK7bVTE'),
    name: 'Smartphone',
    price: '₹24,999',
    rating: '4.7',
  },
  {
    image: unsplash('ogmenj2NGho'),
    name: 'Classic T-Shirt',
    price: '₹899',
    rating: '4.6',
  },
  {
    image: unsplash('SD9Jyl1xNQ4'),
    name: 'Sneakers',
    price: '₹3,499',
    rating: '4.9',
  },
  {
    image: unsplash('qDLLP0yP7FU'),
    name: 'Smart TV',
    price: '₹32,999',
    rating: '4.8',
  },
]

const Hero = () => {
  const [currentProduct, setCurrentProduct] = useState(0)
  const [showProduct, setShowProduct] = useState(true)

  useEffect(() => {
    let timeout

    const interval = setInterval(() => {
      setShowProduct(false)

      timeout = setTimeout(() => {
        setCurrentProduct((prev) => (prev + 1) % products.length)
        setShowProduct(true)
      }, 500)
    }, 3000)

    // Clear both timers when the component unmounts
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  const product = products[currentProduct]

  return (
    <section>
      <div className="relative min-h-[calc(100vh-90px)] flex items-center overflow-hidden">

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={Logo}
            alt="GoMart"
            className="w-[45vw] max-w-[600px] opacity-[0.08]"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-[calc(100vh-90px)] w-full grid grid-cols-1 lg:grid-cols-2 items-center px-6 sm:px-10 lg:px-20">

          {/* Left Side */}
          <div className="max-w-2xl">

            {/* AI Badge */}
            <p className="inline-flex items-center mb-5 px-4 py-2 rounded-full bg-pink-100/80 border border-pink-200 text-sm sm:text-base font-semibold tracking-wider uppercase text-pink-700 shadow-sm">
              AI Powered Shopping
            </p>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-pink-950">
              Shop Smarter
              <br />
              <span className="text-pink-600">Live Better.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-pink-900/70 leading-relaxed">
              Discover products you love with a smarter shopping experience
              powered by AI.
            </p>

            {/* Button */}
            <button className="mt-8 px-7 py-3 rounded-full bg-pink-600 text-white font-medium shadow-lg shadow-pink-600/20 transition-all duration-300 hover:scale-105 hover:bg-pink-700">
              Start Shopping
            </button>

          </div>

          {/* Right Side */}
          <div className="relative flex flex-col items-center justify-center min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] mt-8 lg:mt-0">

            {/* Product Glow */}
            <div className="absolute w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-yellow-300/40 blur-3xl" />

            {/* Product image (uses .image from the current product object) */}
            <img
              src={product.image}
              alt={product.name}
              className={`
                relative z-10
                w-56 h-56 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px]
                rounded-3xl object-cover
                shadow-2xl shadow-pink-900/20
                transition-all duration-500 ease-in-out
                ${showProduct ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
              `}
            />

            {/* Product info, fades with the image */}
            <div
              className={`
                relative z-10 mt-6 flex items-center gap-3
                rounded-full bg-white/80 px-5 py-2 shadow-md backdrop-blur
                transition-opacity duration-500
                ${showProduct ? 'opacity-100' : 'opacity-0'}
              `}
            >
              <span className="font-semibold text-pink-950">{product.name}</span>
              <span className="rounded-full bg-yellow-300 px-3 py-0.5 text-sm font-semibold text-pink-950">
                {product.price}
              </span>
              <span className="text-sm text-pink-700">★ {product.rating}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero