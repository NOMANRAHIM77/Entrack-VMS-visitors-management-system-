

const EducationDashboard = () => {
  return (
    <>
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
    </>
  );
};

export default EducationDashboard;
