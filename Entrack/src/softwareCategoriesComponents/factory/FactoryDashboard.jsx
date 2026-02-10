import { Link } from "react-router-dom";


const FactoryDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Left Sidebar */}
      <aside className="w-64 bg-green-400 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Factory Dashboard</h2>

        <nav className="flex flex-col gap-4 text-white-300">
          <Link to="/factory/analytics" className="hover:text-white">
           Analytics
          </Link>
          <Link to="/factory/machines" className="hover:text-white">
            Machines
          </Link>
          <Link to="/factory/production" className="hover:text-white">
            Production
          </Link>
          <Link to="/factory/reports" className="hover:text-white">
            Reports
          </Link>
          <Link to="/factory/settings" className="hover:text-white">
            Setings
          </Link>
          <Link to="/factory/workers" className="hover:text-white">
            Workers
          </Link>
        </nav>
      </aside>

      {/* Right Content Area */}
      <main className="flex-1 p-8">
        
        

      </main>
    </div>
  );
};

export default FactoryDashboard;
