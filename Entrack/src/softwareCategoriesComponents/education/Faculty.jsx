import React from "react";

const Faculty = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Faculty Management</h2>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl">
            + Add Faculty
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left text-gray-600">
              <th className="py-3">ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3">F001</td>
              <td>Dr. John Doe</td>
              <td>Computer Science</td>
              <td className="text-green-600">Active</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Faculty;
