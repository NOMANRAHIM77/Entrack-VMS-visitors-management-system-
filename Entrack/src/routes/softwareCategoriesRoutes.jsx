import HospitalDashboard from "../softwareCategoriesComponents/hospital/HospitalDashboard"
import EducationDashboard from "../softwareCategoriesComponents/education/EducationDashboard"
import EventHalls from "../softwareCategoriesComponents/eventhalls/EventHalls"
import Factory from "../softwareCategoriesComponents/factory/FactoryDashboard"
import Fitness from "../softwareCategoriesComponents/fitness/Fitness"
import Goverment from "../softwareCategoriesComponents/government/Goverment"
import Hotel from "../softwareCategoriesComponents/hotel/Hotel"
import ItCenters from "../softwareCategoriesComponents/itcenter/ItCenters"
import Office from "../softwareCategoriesComponents/office/Office"


const softwareCategoriesRoutes=[
    {
      route:"/hospital",
      component:<HospitalDashboard/>
    },
     {
      route:"/education",
      component:<EducationDashboard/>
    },
      {
      route:"/eventhalls",
      component:<EventHalls/>
    },
     {
      route:"/factory",
      component:<Factory/>
    },
      {
      route:"/fitness",
      component:<Fitness/>
    },
     {
      route:"/goverment",
      component:<Goverment/>
    },
      {
      route:"/hotel",
      component:<Hotel/>
    },
     {
      route:"/itcenters",
      component:<ItCenters/>
    },
       {
      route:"/office",
      component:<Office/>
    },
]
export default softwareCategoriesRoutes