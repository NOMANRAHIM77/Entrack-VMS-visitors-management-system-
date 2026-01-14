import React from "react";

const ItCenters = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">IT Admin</h1>

        <nav className="flex flex-col gap-4 text-neutral-300">
          <button className="text-left hover:text-white">Dashboard</button>
          <button className="text-left hover:text-white">Infrastructure</button>
          <button className="text-left hover:text-white">Servers</button>
          <button className="text-left hover:text-white">Network</button>
          <button className="text-left hover:text-white">Support Tickets</button>
          <button className="text-left hover:text-white">Security</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            IT Centers Dashboard
          </h2>

          <div className="bg-white px-4 py-2 rounded-xl shadow text-sm">
            System Health Overview
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Total IT Centers</p>
            <h3 className="text-4xl font-bold mt-2">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Active Servers</p>
            <h3 className="text-4xl font-bold mt-2 text-green-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Open Support Tickets</p>
            <h3 className="text-4xl font-bold mt-2 text-yellow-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Security Alerts</p>
            <h3 className="text-4xl font-bold mt-2 text-red-600">0</h3>
          </div>

        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Infrastructure Status */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Infrastructure Status
            </h4>
            <p className="text-gray-500 text-sm">
              Real-time infrastructure health and performance metrics will appear here.
            </p>
          </div>

          {/* Ticket & Security Overview */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Support & Security Overview
            </h4>
            <p className="text-gray-500 text-sm">
              Ticket resolution status and security incident reports will be displayed here.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
};

export default ItCenters;
