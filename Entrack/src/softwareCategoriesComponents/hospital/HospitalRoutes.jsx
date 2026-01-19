// HospitalRoutes.jsx
import HospitalLayout from "./HospitalLayout";
import Dashboard from "./Dashboard";
import Visitors from "./Visitors";
import Patients from "./Patients";
import Reports from "./Reports";
import Settings from "./Settings";

const HospitalRoutes = {
  path: "/hospital",
  element: <HospitalLayout />,
  children: [
    { index: true, element: <Dashboard /> }, // default page
    { path: "visitors", element: <Visitors /> },
    { path: "patients", element: <Patients /> },
    { path: "reports", element: <Reports /> },
    { path: "settings", element: <Settings /> },
  ],
};

export default HospitalRoutes;
