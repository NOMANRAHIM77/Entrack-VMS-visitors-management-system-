// HospitalRoutes.jsx
import HospitalLayout from "./HospitalLayout";
import HospitalDashboard from "./HospitalDashboard";
import Visitors from "./Visitors";
import Patients from "./Patients";
import Reports from "./Reports";
import Settings from "./Settings";

const HospitalRoutes = [

    { route: "hospital/visitors", component: <Visitors /> },
    { route: "hospital/patients", component: <Patients /> },
    { route: "hospital/reports", component: <Reports /> },
    { route: "hospital/settings", component: <Settings /> },
  
];


export default HospitalRoutes;
