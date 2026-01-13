import React from "react";

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">Edu Admin</h1>

        <nav className="flex flex-col gap-4 text-indigo-200">
          <button className="text-left hover:text-white">Dashboard</button>
          <button className="text-left hover:text-white">Students</button>
          <button className="text-left hover:text-white">Courses</button>
          <button className="text-left hover:text-white">Faculty</button>
          <button className="text-left hover:text-white">Results</button>
          <button className="text-left hover:text-white">Settings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Education Dashboard
          </h2>

          <div className="bg-white px-4 py-2 rounded-xl shadow text-sm">
            Academic Year 2026
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Total Students</p>
            <h3 className="text-4xl font-bold mt-2">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Active Courses</p>
            <h3 className="text-4xl font-bold mt-2 text-indigo-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Faculty Members</p>
            <h3 className="text-4xl font-bold mt-2 text-green-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Pass Percentage</p>
            <h3 className="text-4xl font-bold mt-2 text-emerald-600">0%</h3>
          </div>

        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Enrollment Overview */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Student Enrollment Overview
            </h4>
            <p className="text-gray-500 text-sm">
              Enrollment analytics will appear here.
            </p>
          </div>

          {/* Performance Panel */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Academic Performance Summary
            </h4>
            <p className="text-gray-500 text-sm">
              Course-wise performance data will appear here.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Education;
