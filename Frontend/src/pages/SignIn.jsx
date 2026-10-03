import React from 'react'
import Logo from '../assets/logo.svg'
import { Mail, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-pink-200 via-rose-100 to-yellow-100 text-pink-950">

      {/* Logo */}
      <img
        src={Logo}
        alt="GoMart"
        className="w-32 mb-6"
      />

      {/* Main Card */}
      <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl border border-white/70 w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold">
            Welcome Back
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Sign in to continue shopping with GoMart.
          </p>
        </div>


        <form>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
              />
            </div>
          </div>


          {/* Password */}
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
              />
            </div>
          </div>


          {/* Forgot Password */}
          <div className="text-right mb-5">
            <Link
              to="/forgot-password"
              className="text-sm text-pink-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>


          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.01] transition"
          >
            Sign In →
          </button>

        </form>


        {/* OR */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-gray-200 flex-1"></div>

          <span className="text-sm text-gray-400">
            OR
          </span>

          <div className="h-px bg-gray-200 flex-1"></div>
        </div>


        {/* Google */}
        <button
          type="button"
          className="w-full py-3 rounded-xl border border-gray-200 bg-white font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          <span className="mr-2 font-bold text-lg">
            G
          </span>

          Continue with Google
        </button>


        {/* Sign Up */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{' '}

          <Link
            to="/signup"
            className="text-pink-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  )
}

export default SignIn