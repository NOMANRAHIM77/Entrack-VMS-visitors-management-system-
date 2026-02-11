import EventHallDashboard from "./EventHallDashboard";
import Bookings from "./Bookings";
import Halls from "./Halls";
import Analytics from "./Analytics";
import Settings from "./Settings";

const EventHallRoutes = [
    {
    route: "/eventhall",
    component: <EventHallDashboard/>,
  },
  {
    route: "/eventhall/dashboard",
    component: <EventHallDashboard />,
  },
  {
    route: "/eventhall/booking",
    component: < Bookings/>,
  },
  {
    route: "/eventhall/hall",
    component: <Halls />,
  },
  {
    route: "/eventhall/settings",
    component: <Settings />,
  },
  {
    route: "/eventhall/analytics",
    component: <Analytics/>,
  },
];

export default EventHallRoutes;
