import React from "react";
import { Link } from "react-router-dom";

const EducationLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">Edu Admin</h1>

        <nav className="flex flex-col gap-4 text-indigo-200">
          <Link to="/education" className="hover:text-white">Dashboard</Link>
          <Link to="/education/students" className="hover:text-white">Students</Link>
          <Link to="/education/courses" className="hover:text-white">Courses</Link>
          <Link to="/education/faculty" className="hover:text-white">Faculty</Link>
          <Link to="/education/results" className="hover:text-white">Results</Link>
          <Link to="/education/settings" className="hover:text-white">Settings</Link>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
};

export default EducationLayout;
