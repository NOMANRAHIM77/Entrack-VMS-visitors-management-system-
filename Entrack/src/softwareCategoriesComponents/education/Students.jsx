import React from "react";

const Students = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Students Management</h2>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl">
            + Add Student
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left text-gray-600">
              <th className="py-3">ID</th>
              <th>Name</th>
              <th>Program</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3">001</td>
              <td>Student Name</td>
              <td>BSCS</td>
              <td className="text-green-600">Active</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Students;
