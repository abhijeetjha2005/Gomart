import React from 'react'

import Logo from "../assets/Logo.svg"

import { Search } from "lucide-react";

const Navbar = () => {

  return (

    <nav className='w-full px-4 sm:px-6 lg:px-10 py-4'>

      <div className='flex items-center justify-between gap-4'>

        {/* logo */}
        <img
          src={Logo}
          alt="Gomart"
          className='w-20 sm:w-24 lg:w-28 h-auto shrink-0'
        />

        {/* search */}
        <div className="relative flex-1 max-w-xl mx-4">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder='Search products , brands and more..'
            className="
              w-full
              px-3 py-2
              text-sm
              border
              rounded-full
              outline-none
              pl-10
            "
          />

        </div>

        {/* Auth */}
        <div className='flex items-center gap-1 sm:gap-3 shrink-0'>

          <button className='px-2 sm:px-4 py-2 text-sm sm:text-base'>
            Sign In
          </button>

          <button className='px-3 sm:px-5 py-2 text-sm sm:text-base rounded-full'>
            Sign Up
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar