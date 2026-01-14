import React from "react";

const Goverment = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">Gov Admin</h1>

        <nav className="flex flex-col gap-4 text-blue-200">
          <button className="text-left hover:text-white">Dashboard</button>
          <button className="text-left hover:text-white">Departments</button>
          <button className="text-left hover:text-white">Citizens</button>
          <button className="text-left hover:text-white">Services</button>
          <button className="text-left hover:text-white">Complaints</button>
          <button className="text-left hover:text-white">Reports</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Government Services Dashboard
          </h2>

          <div className="bg-white px-4 py-2 rounded-xl shadow text-sm">
            National Overview
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Total Departments</p>
            <h3 className="text-4xl font-bold mt-2">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Registered Citizens</p>
            <h3 className="text-4xl font-bold mt-2 text-green-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Active Services</p>
            <h3 className="text-4xl font-bold mt-2 text-blue-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Pending Complaints</p>
            <h3 className="text-4xl font-bold mt-2 text-red-600">0</h3>
          </div>

        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Service Requests */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Service Request Overview
            </h4>
            <p className="text-gray-500 text-sm">
              Status of citizen service requests will appear here.
            </p>
          </div>

          {/* Department Performance */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Department Performance Summary
            </h4>
            <p className="text-gray-500 text-sm">
              Department-wise efficiency and response time analytics will be displayed here.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Goverment;
