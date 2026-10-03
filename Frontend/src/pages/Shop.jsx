import React, { useState, useMemo } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

const Shop = () => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(
    () => ['All', ...new Set(products.map((p) => p.category))],
    []
  )

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase())
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [search, selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-yellow-100 text-pink-950">
      <Navbar search={search} setSearch={setSearch}  />

      {/* Filter bar */}
      <div className="max-w-5xl mx-auto px-6 pt-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-pink-900 hover:bg-pink-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className="px-6 py-10">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-pink-900/70 mt-10">
            No products found.
          </p>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Shop
