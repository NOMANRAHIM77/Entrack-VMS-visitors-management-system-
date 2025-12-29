import React from 'react'
import { Link } from 'react-router-dom'

const SoftwareCategoriesNavbar = () => {
  return (
    <nav className="h-16 px-6 flex items-center justify-between bg-slate-900 text-white">
      
      {/* Left section */}
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-semibold tracking-wide">
          MyCompany
        </h1>

        <div className="flex gap-6">
          <Link
            to="/dashboard"
            className="text-gray-300 hover:text-white transition"
          >
            Dashboard
          </Link>

          <Link
            to="/visitors"
            className="text-gray-300 hover:text-white transition"
          >
            Manage Visitors
          </Link>

          <Link
            to="/analytics"
            className="text-gray-300 hover:text-white transition"
          >
            Analytics
          </Link>
        </div>
      </div>

      {/* Right section */}
      <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium transition">
        Logout
      </button>
    </nav>
  )
}

export default SoftwareCategoriesNavbar