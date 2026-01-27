import { Link } from "react-router-dom";

const EducationDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Left Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Education Dashboard</h2>

        <nav className="flex flex-col gap-4 text-gray-300">
          <Link to="/education/courses" className="hover:text-white">
            Courses
          </Link>
          <Link to="/education/faculty" className="hover:text-white">
            Faculty
          </Link>
          <Link to="/education/students" className="hover:text-white">
            Students
          </Link>
          <Link to="/education/results" className="hover:text-white">
            Results
          </Link>
          <Link to="/education/settings" className="hover:text-white">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Right Content Area */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Academic Overview
          </h1>
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

        {/* Analytics / Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Student Enrollment Overview
            </h4>
            <p className="text-gray-500 text-sm">
              Enrollment trends and growth analytics will appear here.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">
              Academic Performance Summary
            </h4>
            <p className="text-gray-500 text-sm">
              Course-wise performance and result analytics will appear here.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
};

export default EducationDashboard;
