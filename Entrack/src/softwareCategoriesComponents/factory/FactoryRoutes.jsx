import FactoryLayout from "./FactoryLayout";
import FactoryDashboard from "./FactoryDashboard";
import Machines from "./Machines";
import Workers from "./Workers";
import Production from "./Production";
import Reports from "./Reports";
import Settings from "./Settings";

const FactoryRoutes = [
   {
    route: "/factory",
    component: <Factory />,
  },
  {
    route: "/factory/dashboard",
    component: <FactoryDashboard />,
  },
  {
    route: "/factory/machines",
    component: <Machines />,
  },
  {
    route: "/factory/production",
    component: <Production />,
  },
  {
    route: "/factory/reports",
    component: <Reports />,
  },
  {
    route: "/factory/workers",
    component: <Workers />,
  },
];

export default FactoryRoutes;
