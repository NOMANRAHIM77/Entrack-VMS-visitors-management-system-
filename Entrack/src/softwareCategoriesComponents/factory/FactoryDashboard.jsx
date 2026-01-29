const FactoryDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Factory Overview</h1>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Machines</p>
          <h2 className="text-3xl font-bold">24</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Active Workers</p>
          <h2 className="text-3xl font-bold text-green-600">120</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Daily Production</p>
          <h2 className="text-3xl font-bold">3,400</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Faulty Machines</p>
          <h2 className="text-3xl font-bold text-red-500">2</h2>
        </div>
      </div>
    </div>
  );
};

export default FactoryDashboard;
