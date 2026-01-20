// HospitalLayout.jsx
import HospitalDashboard from "./HospitalDashboard";

const HospitalLayout = ({children}) => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      <HospitalDashboard/>

      {/* Dynamic Content */}
      <main className="flex-1 p-8">
       {children}
      </main>
    </div>
  );
};

export default HospitalLayout;
