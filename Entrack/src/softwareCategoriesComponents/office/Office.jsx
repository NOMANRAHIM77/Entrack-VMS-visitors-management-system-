import React from "react";

const Office = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">Office Admin</h1>

        <nav className="flex flex-col gap-4 text-slate-300">
          <button className="text-left hover:text-white">Dashboard</button>
          <button className="text-left hover:text-white">Employees</button>
          <button className="text-left hover:text-white">Departments</button>
          <button className="text-left hover:text-white">Attendance</button>
          <button className="text-left hover:text-white">Meetings</button>
          <button className="text-left hover:text-white">Facilities</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Office Dashboard
          </h2>

          <div className="bg-white px-4 py-2 rounded-xl shadow text-sm">
            Corporate Operations Overview
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Total Employees</p>
            <h3 className="text-4xl font-bold mt-2">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Departments</p>
            <h3 className="text-4xl font-bold mt-2 text-blue-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Present Today</p>
            <h3 className="text-4xl font-bold mt-2 text-green-600">0</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Meetings Scheduled</p>
            <h3 className="text-4xl font-bold mt-2 text-purple-600">0</h3>
          </div>

        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Attendance Overview */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Attendance Overview
            </h4>
            <p className="text-gray-500 text-sm">
              Daily attendance trends and employee presence analytics will be shown here.
            </p>
          </div>

          {/* Facility & Meetings */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Facility & Meeting Management
            </h4>
            <p className="text-gray-500 text-sm">
              Meeting room usage, facility status, and office resource utilization data will appear here.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Office;
