import React from 'react'
import Logo from '../assets/logo.svg'
import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-pink-200 via-rose-100 to-yellow-100 text-pink-950">

      {/* Logo */}
      <img
        src={Logo}
        alt="GoMart"
        className="w-32 mb-6"
      />

      {/* Card */}
      <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl border border-white/70 w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold">
            Forgot Password?
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Enter your email and we'll send you a
            password reset link.
          </p>
        </div>

        <form>

          {/* Email */}
          <div className="mb-5">
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.01] transition"
          >
            Send Reset Link →
          </button>

        </form>

        {/* Back */}
        <div className="text-center mt-6">
          <Link
            to="/signin"
            className="text-sm text-pink-600 font-semibold hover:underline"
          >
            ← Back to Sign In
          </Link>
        </div>

      </div>

    </div>
  )
}

export default ForgotPassword