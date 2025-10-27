import { useState } from 'react'
import './App.css'
import FrontPage from './pages/FrontPage'
import Layout from './layout/Layout'
import appRoutes from './routes/appRoutes'
import softwareCategoriesRoutes from './routes/softwareCategoriesRoutes'
import SoftwareCategories from './pages/SoftwareCategories'


// react router

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:(<Layout>
      <FrontPage/>
    </Layout>)
  },

  ...appRoutes.map((currRoute)=>({
    path : currRoute.route,
    element : (
      <Layout>
        {currRoute.component}
      </Layout>
    )
  })),

  ...softwareCategoriesRoutes.map((currRoute)=>({
path:currRoute.route,
element : (
  <Layout>
    {currRoute.component}
    </Layout>
)
  }))
]);



function App() {
  console.log(softwareCategoriesRoutes);

  return (
    <>
    <RouterProvider router={router} />     
    </>
  )
}

export default App
