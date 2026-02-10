import FactoryLayout from "./FactoryLayout";
import FactoryDashboard from "./FactoryDashboard";
import Machines from "./Machines";
import Workers from "./Workers";
import Production from "./Production";
import Reports from "./Reports";
import Settings from "./Settings";

const FactoryRoutes = [
   {
    route: "/education",
    component: <Education />,
  },
  {
    route: "/education/dashboard",
    component: <EducationDashboard />,
  },
  {
    route: "/education/students",
    component: <Students />,
  },
  {
    route: "/education/courses",
    component: <Courses />,
  },
  {
    route: "/education/faculty",
    component: <Faculty />,
  },
  {
    route: "/education/results",
    component: <Results />,
  },
  {
    route: "/education/settings",
    component: <Settings />,
  },
  {
    route: "/education/analytics",
    component: <Analytics/>,
  },
];

export default FactoryRoutes;
