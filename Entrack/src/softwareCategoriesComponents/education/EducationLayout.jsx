import React from "react";
import { Link } from "react-router-dom";
import EducationDashboard from "./EducationDashboard";

const EducationLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col p-6">
         <h2 className="text-xl font-bold mb-8">Hospital Dashboard</h2>
       <EducationDashboard/>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
};

export default EducationLayout;
