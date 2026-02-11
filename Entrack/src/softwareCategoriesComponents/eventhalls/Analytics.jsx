const Analytics = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        Analytics & Reports
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow">
          <h4 className="font-semibold mb-3">Booking Trends</h4>
          <p className="text-gray-500 text-sm">
            Monthly booking statistics will appear here.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h4 className="font-semibold mb-3">Revenue Analysis</h4>
          <p className="text-gray-500 text-sm">
            Revenue breakdown by event type.
          </p>
        </div>

      </div>
    </>
  );
};

export default Analytics;
