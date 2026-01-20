// HospitalDashboard.jsx
const HospitalDashboard = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Dashboard Overview
        </h2>
        <div className="bg-white px-4 py-2 rounded-xl shadow text-sm">
          Admin Panel
        </div>
      </div>

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
          <p className="text-gray-500 text-sm">Checked Out</p>
          <h3 className="text-4xl font-bold mt-2 text-red-500">0</h3>
        </div>
      </div>
    </>
  );
};

export default HospitalDashboard;
