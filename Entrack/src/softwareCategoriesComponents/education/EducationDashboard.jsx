import React from "react";

const EducationDashboard = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-6">
        Education Dashboard
      </h2>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p>Total Students</p>
          <h3 className="text-3xl font-bold">0</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p>Courses</p>
          <h3 className="text-3xl font-bold">0</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p>Faculty</p>
          <h3 className="text-3xl font-bold">0</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p>Pass %</p>
          <h3 className="text-3xl font-bold">0%</h3>
        </div>
      </div>
    </>
  );
};

export default EducationDashboard;
