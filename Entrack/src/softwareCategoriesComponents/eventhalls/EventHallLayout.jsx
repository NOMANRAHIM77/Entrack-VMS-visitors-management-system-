import React from "react";
import { Link } from "react-router-dom";
import EventHallDashboard from "./EventHallDashboard";

const EventHallLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
       <EventHallDashboard/>
      {/* Page Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default EventHallLayout;
