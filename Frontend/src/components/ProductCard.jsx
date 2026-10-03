import { Eye, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const ProductCard = ({ product = {} }) => {
  const navigate = useNavigate()
  const {
    id,
    name = "Product",
    image = "https://via.placeholder.com/300",
    cheapestSource = "N/A",
    rating = 4.5,
  } = product

  return (
    <div className='w-full max-w-sm bg-white rounded-2xl shadow-md p-5'>
      <p className='text-center font-semibold text-pink-950 mb-4'>Cheapest at: {cheapestSource}</p>

      {/* image */}
      <div className="h-72 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* action */}
      <div className="flex items-center justify-between mt-5">
        {/* rating */}
        <div className="flex items-center gap-1.5 border border-gray-300 rounded-xl px-4 py-2.5">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{rating}</span>
        </div>

        {/* view */}
        <button
          onClick={() => navigate(`/product/${id}`)}
          className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
        >
          <Eye size={18} />
          <span>View</span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard