import React from "react";

const Factory = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">Factory Admin</h1>

        <nav className="flex flex-col gap-4 text-slate-300">
          <button className="text-left hover:text-white">Dashboard</button>
          <button className="text-left hover:text-white">Production</button>
          <button className="text-left hover:text-white">Inventory</button>
          <button className="text-left hover:text-white">Machines</button>
          <button className="text-left hover:text-white">Workers</button>
          <button className="text-left hover:text-white">Reports</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Factory Operations Dashboard
          </h2>

          <div className="bg-white px-4 py-2 rounded-xl shadow text-sm">
            Live Production Status
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Total Production Units</p>
            <h3 className="text-4xl font-bold mt-2">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Active Machines</p>
            <h3 className="text-4xl font-bold mt-2 text-green-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Idle Machines</p>
            <h3 className="text-4xl font-bold mt-2 text-yellow-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Defect Rate</p>
            <h3 className="text-4xl font-bold mt-2 text-red-600">0%</h3>
          </div>

        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Production Overview */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Production Overview
            </h4>
            <p className="text-gray-500 text-sm">
              Production trends and output analytics will appear here.
            </p>
          </div>

          {/* Inventory Status */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Inventory & Raw Materials
            </h4>
            <p className="text-gray-500 text-sm">
              Stock levels and raw material usage will be displayed here.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Factory;
