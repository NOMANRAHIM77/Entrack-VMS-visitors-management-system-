// HospitalLayout.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HospitalLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">Hospital Admin</h1>

        <nav className="flex flex-col gap-4 text-gray-300">
          <NavLink to="" end className="hover:text-white">
            Dashboard
          </NavLink>
          <NavLink to="visitors" className="hover:text-white">
            Visitors
          </NavLink>
          <NavLink to="patients" className="hover:text-white">
            Patients
          </NavLink>
          <NavLink to="reports" className="hover:text-white">
            Reports
          </NavLink>
          <NavLink to="settings" className="hover:text-white">
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Dynamic Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default HospitalLayout;
