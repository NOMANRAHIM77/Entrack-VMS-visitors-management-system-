const Analytics = () => {
  return (
    <div className="space-y-8">

      <h1 className="text-2xl font-bold">Factory Analytics</h1>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Efficiency Rate</p>
          <h2 className="text-3xl font-bold text-green-600">92%</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Downtime Hours</p>
          <h2 className="text-3xl font-bold text-red-500">14h</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Monthly Output</p>
          <h2 className="text-3xl font-bold">98,450</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Defect Rate</p>
          <h2 className="text-3xl font-bold text-yellow-500">3.2%</h2>
        </div>
      </div>

      {/* Charts / Analytics Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-3">
            Production Trend
          </h3>
          <p className="text-gray-500 text-sm">
            Graph showing daily production trends will appear here.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-3">
            Machine Performance
          </h3>
          <p className="text-gray-500 text-sm">
            Performance analytics of machines will appear here.
          </p>
        </div>

      </div>

      {/* Summary */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-lg font-semibold mb-3">
          Insights Summary
        </h3>
        <p className="text-gray-600 text-sm">
          Factory performance is stable with high efficiency and
          minimal downtime. Preventive maintenance is recommended
          for underperforming machines.
        </p>
      </div>

    </div>
  );
};

export default Analytics;
