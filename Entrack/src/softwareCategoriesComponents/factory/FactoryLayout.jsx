import { NavLink, Outlet } from "react-router-dom";

const FactoryLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Factory Panel</h2>

        <nav className="flex flex-col gap-4 text-gray-300">
          <NavLink to="/factory" end className={({ isActive }) =>
            isActive ? "text-white font-semibold" : "hover:text-white"
          }>
            Dashboard
          </NavLink>

          <NavLink to="/factory/machines">Machines</NavLink>
          <NavLink to="/factory/workers">Workers</NavLink>
          <NavLink to="/factory/production">Production</NavLink>
          <NavLink to="/factory/reports">Reports</NavLink>
          <NavLink to="/factory/settings">Settings</NavLink>
        </nav>
      </aside>

      {/* Right Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default FactoryLayout;
