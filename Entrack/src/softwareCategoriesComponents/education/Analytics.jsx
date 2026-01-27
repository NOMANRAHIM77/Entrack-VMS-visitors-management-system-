const Analytics = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Overview & Analytics</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Total Students</h3>
          <p className="text-3xl font-bold">1,250</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Courses</h3>
          <p className="text-3xl font-bold">42</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Faculty</h3>
          <p className="text-3xl font-bold">18</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
