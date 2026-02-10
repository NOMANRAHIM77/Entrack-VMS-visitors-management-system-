import React from "react";
import { Link } from "react-router-dom";
import FactoryDashboard from "./FactoryDashboard";

const FactoryLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
       <FactoryDashboard/>
      {/* Page Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default FactoryLayout;
