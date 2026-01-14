import React from "react";

const Fitness = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">Fitness Admin</h1>

        <nav className="flex flex-col gap-4 text-emerald-200">
          <button className="text-left hover:text-white">Dashboard</button>
          <button className="text-left hover:text-white">Members</button>
          <button className="text-left hover:text-white">Trainers</button>
          <button className="text-left hover:text-white">Programs</button>
          <button className="text-left hover:text-white">Attendance</button>
          <button className="text-left hover:text-white">Payments</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Fitness Center Dashboard
          </h2>

          <div className="bg-white px-4 py-2 rounded-xl shadow text-sm">
            Monthly Overview
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Total Members</p>
            <h3 className="text-4xl font-bold mt-2">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Active Members</p>
            <h3 className="text-4xl font-bold mt-2 text-green-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Personal Trainers</p>
            <h3 className="text-4xl font-bold mt-2 text-blue-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Monthly Revenue</p>
            <h3 className="text-4xl font-bold mt-2 text-emerald-600">
              $0
            </h3>
          </div>

        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Workout Analytics */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Workout & Attendance Analytics
            </h4>
            <p className="text-gray-500 text-sm">
              Member workout trends and attendance insights will appear here.
            </p>
          </div>

          {/* Program Performance */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Fitness Program Performance
            </h4>
            <p className="text-gray-500 text-sm">
              Program effectiveness and participation data will be displayed here.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Fitness;
