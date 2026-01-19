const Results = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-6">
          Academic Results Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="text-gray-500 text-sm">Total Students</p>
            <h3 className="text-3xl font-bold">0</h3>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="text-gray-500 text-sm">Passed</p>
            <h3 className="text-3xl font-bold text-green-600">0</h3>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="text-gray-500 text-sm">Failed</p>
            <h3 className="text-3xl font-bold text-red-600">0</h3>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Results;
