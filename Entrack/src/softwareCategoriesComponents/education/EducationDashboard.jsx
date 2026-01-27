import { Link } from "react-router-dom";
import Analytics from "./Analytics";

const EducationDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Left Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Education Dashboard</h2>

        <nav className="flex flex-col gap-4 text-gray-300">
          <Link to="/education/courses" className="hover:text-white">
            Courses
          </Link>
          <Link to="/education/faculty" className="hover:text-white">
            Faculty
          </Link>
          <Link to="/education/students" className="hover:text-white">
            Students
          </Link>
          <Link to="/education/results" className="hover:text-white">
            Results
          </Link>
          <Link to="/education/settings" className="hover:text-white">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Right Content Area */}
      <main className="flex-1 p-8">
        
        <Analytics/>

      </main>
    </div>
  );
};

export default EducationDashboard;
