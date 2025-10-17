import React, { Component } from "react";
import About from "../pages/About";
import DevInfo from "../pages/DevInfo";
import FrontPage from "../pages/FrontPage";
import Pricing from "../pages/Pricing";
import SoftwareCategories from "../pages/SoftwareCategories";

const appRoutes=[
    {
        route:"/home",
        component :<FrontPage/>
    },
    {
        route:"/about",
        component:<About/>
    },
    {
        route:"/pricing",
        component:<Pricing/>
    },
    {
        route:"/developersinfo",
        component:<DevInfo/>
    },
    {
        route:"/softwarecategories",
        component:<SoftwareCategories/>
    }
]

export default appRoutes