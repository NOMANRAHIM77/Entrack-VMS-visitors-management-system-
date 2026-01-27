import Education from "./EducationLayout";
import EducationDashboard from "./EducationDashboard";
import Students from "./Students";
import Courses from "./Courses";
import Faculty from "./Faculty";
import Results from "./Results";
import Settings from "./Settings";
import Analytics from "./Analytics";

const EducationRoutes = [
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

export default EducationRoutes;
