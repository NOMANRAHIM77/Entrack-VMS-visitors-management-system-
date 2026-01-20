// HospitalDashboard.jsx
import { Link } from "react-router-dom";

const HospitalDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Left Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Hospital Dashboard</h2>

        <nav className="flex flex-col gap-4 text-gray-300">
          <Link
            to="/hospital/patients"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white"
            }
          >
            Patients
          </Link>

          <Link
            to="/hospital/visitors"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white"
            }
          >
            Visitors
          </Link>

          <Link
            to="/hospital/reports"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white"
            }
          >
            Reports
          </Link>

          <Link
            to="/hospital/settings"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white"
            }
          >
            Settings
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default HospitalDashboard;
