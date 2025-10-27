import Hospital from "../softwareCategoriesComponents/hospital"
import Education from "../softwareCategoriesComponents/Education"
import EventHalls from "../softwareCategoriesComponents/EventHalls"
import Factory from "../softwareCategoriesComponents/Factory"
import Fitness from "../softwareCategoriesComponents/Fitness"
import Goverment from "../softwareCategoriesComponents/Goverment"
import Hotel from "../softwareCategoriesComponents/Hotel"
import ItCenters from "../softwareCategoriesComponents/ItCenters"
import Office from "../softwareCategoriesComponents/Office"


const softwareCategoriesRoutes=[
    {
      route:"/hospital",
      component:<Hospital/>
    },
     {
      route:"/education",
      component:<Education/>
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