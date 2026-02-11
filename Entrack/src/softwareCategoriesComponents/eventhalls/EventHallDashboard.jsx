import { Link } from "react-router-dom";
import Analytics from "./Analytics";

const EventHallDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Left Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">EventHall Dashboard</h2>

        <nav className="flex flex-col gap-4 text-gray-300">
          <Link to="/eventhall/analytics" className="hover:text-white">
           Analytics
          </Link>
          <Link to="/eventhall/booking" className="hover:text-white">
            Booings
          </Link>
          <Link to="/eventhall/hall" className="hover:text-white">
            Hall
          </Link>
          <Link to="/eventhall/settings" className="hover:text-white">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Right Content Area */}
      <main className="flex-1 p-8">
        
        

      </main>
    </div>
  );
};

export default EventHallDashboard;
