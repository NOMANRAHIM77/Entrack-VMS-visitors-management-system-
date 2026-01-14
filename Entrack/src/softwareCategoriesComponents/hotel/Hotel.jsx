import React from "react";

const Hotel = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-rose-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">Hotel Admin</h1>

        <nav className="flex flex-col gap-4 text-rose-200">
          <button className="text-left hover:text-white">Dashboard</button>
          <button className="text-left hover:text-white">Rooms</button>
          <button className="text-left hover:text-white">Bookings</button>
          <button className="text-left hover:text-white">Guests</button>
          <button className="text-left hover:text-white">Staff</button>
          <button className="text-left hover:text-white">Payments</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Hotel Management Dashboard
          </h2>

          <div className="bg-white px-4 py-2 rounded-xl shadow text-sm">
            Today’s Overview
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Total Rooms</p>
            <h3 className="text-4xl font-bold mt-2">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Occupied Rooms</p>
            <h3 className="text-4xl font-bold mt-2 text-green-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Available Rooms</p>
            <h3 className="text-4xl font-bold mt-2 text-blue-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Today’s Revenue</p>
            <h3 className="text-4xl font-bold mt-2 text-rose-600">
              $0
            </h3>
          </div>

        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Booking Activity */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Recent Bookings
            </h4>
            <p className="text-gray-500 text-sm">
              Latest guest bookings and check-ins will appear here.
            </p>
          </div>

          {/* Occupancy Overview */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Occupancy & Availability Overview
            </h4>
            <p className="text-gray-500 text-sm">
              Room occupancy trends and availability status will be displayed here.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Hotel;
