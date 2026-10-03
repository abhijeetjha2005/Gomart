import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Star } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-yellow-100 text-pink-950">
        <p className="text-xl font-semibold mb-4">Product not found</p>
        <button
          onClick={() => navigate('/shop')}
          className="px-5 py-2.5 rounded-full bg-pink-600 text-white"
        >
          Back to Shop
        </button>
      </div>
    )
  }

  const similarProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-yellow-100 text-pink-950">
      <Navbar />

      {/* Product details */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="h-80 sm:h-96 rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-1.5 mt-3">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{product.rating}</span>
          </div>

          <p className="mt-4 text-lg text-pink-900/70">{product.description}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-2xl font-semibold">{product.price}</span>
            <span className="text-sm bg-yellow-300 px-3 py-1 rounded-full font-medium">
              Cheapest at: {product.cheapestSource}
            </span>
          </div>

          <button className="mt-8 px-7 py-3 rounded-full bg-pink-600 text-white font-medium shadow-lg hover:bg-pink-700 transition">
            Buy Now
          </button>
        </div>
      </div>

      {/* Similar products */}
      {similarProducts.length > 0 && (
        <div className="px-6 sm:px-10 lg:px-20 pb-16">
          <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {similarProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default ProductDetails