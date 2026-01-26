import React from "react";
import { Link } from "react-router-dom";
import EducationDashboard from "./EducationDashboard";

const EducationLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
       <EducationDashboard/>
      {/* Page Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default EducationLayout;
