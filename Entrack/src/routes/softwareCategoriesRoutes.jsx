import Hospital from "../softwareCategoriesComponents/hospital/Hospital"
import Education from "../softwareCategoriesComponents/education/Education"
import EventHalls from "../softwareCategoriesComponents/eventhalls/EventHalls"
import Factory from "../softwareCategoriesComponents/factory/Factory"
import Fitness from "../softwareCategoriesComponents/fitness/Fitness"
import Goverment from "../softwareCategoriesComponents/government/Goverment"
import Hotel from "../softwareCategoriesComponents/hotel/Hotel"
import ItCenters from "../softwareCategoriesComponents/itcenter/ItCenters"
import Office from "../softwareCategoriesComponents/office/Office"


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