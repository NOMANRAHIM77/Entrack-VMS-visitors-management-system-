// HospitalRoutes.jsx
import HospitalLayout from "./HospitalLayout";
import HospitalDashboard from "./HospitalDashboard";
import Visitors from "./Visitors";
import Patients from "./Patients";
import Reports from "./Reports";
import Settings from "./Settings";

const HospitalRoutes = [

    { route: "/visitors", component: <Visitors /> },
    { route: "/patients", component: <Patients /> },
    { route: "/reports", component: <Reports /> },
    { route: "/settings", component: <Settings /> },
  
];


export default HospitalRoutes;
