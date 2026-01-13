import React from "react";

const Hospital = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">Hospital Admin</h1>

        <nav className="flex flex-col gap-4 text-gray-300">
          <button className="text-left hover:text-white">Dashboard</button>
          <button className="text-left hover:text-white">Visitors</button>
          <button className="text-left hover:text-white">Patients</button>
          <button className="text-left hover:text-white">Reports</button>
          <button className="text-left hover:text-white">Settings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Dashboard Overview
          </h2>

          <div className="bg-white px-4 py-2 rounded-xl shadow text-sm">
            Admin Panel
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Total Visitors</p>
            <h3 className="text-4xl font-bold mt-2">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Visitors Inside</p>
            <h3 className="text-4xl font-bold mt-2 text-green-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Visitors Checked Out</p>
            <h3 className="text-4xl font-bold mt-2 text-red-500">0</h3>
          </div>

        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Activity Panel */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Recent Visitor Activity
            </h4>
            <p className="text-gray-500 text-sm">
              No recent activity available.
            </p>
          </div>

          {/* Summary Panel */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Daily Summary
            </h4>
            <p className="text-gray-500 text-sm">
              Visitor statistics will appear here.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Hospital;
