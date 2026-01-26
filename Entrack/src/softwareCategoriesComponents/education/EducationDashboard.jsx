import { Link } from "react-router-dom";
const EducationDashboard = () => {
  return (
    <>
     <div className="min-h-screen flex bg-gray-100">
      
      {/* Left Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Education Dashboard</h2>
     <nav className="flex flex-col gap-4 text-gray-300">
          <Link
            to="/education/courses"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white"
            }
          >
            courses
          </Link>

          <Link
            to="/education/faculty"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white"
            }
          >
            faculty
          </Link>

          <Link
            to="/education/results"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white"
            }
          >
            results
          </Link>

          <Link
            to="/education/settings"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white"
            }
          >
            Settings
          </Link>
           <Link
            to="/education/students"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white"
            }
          >
            students
          </Link>
        </nav>
        </aside>
    </div>
    </>
  );
};

export default EducationDashboard;
