import { useState } from 'react'
import './App.css'
import FrontPage from './pages/FrontPage'
import Layout from './layout/Layout'
import appRoutes from './routes/appRoutes'
import softwareCategoriesRoutes from './routes/softwareCategoriesRoutes'
import EducationRoutes from './softwareCategoriesComponents/education/EducationRoutes'
import HospitalRoutes from './softwareCategoriesComponents/hospital/HospitalRoutes'

import SoftwareCategories from './pages/SoftwareCategories'
import Login from './Authentication/Login'
import SignUp from './Authentication/SignUp'
import PrivateRoute from './routes/PrivateRoute'
import { AuthProvider } from './contextsFiles/AuthContext'
import SoftwareCategoriesLayout from './layout/SoftwareCategoriesLayout'
import EducationLayout from './softwareCategoriesComponents/education/EducationLayout'


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
  {
       path: "/signup",
    element:(
      <SignUp/>
   )
  },
   {
       path: "/login",
    element:(
      <Login/>
   )
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
<PrivateRoute>
    <SoftwareCategoriesLayout>
    {currRoute.component}
    </SoftwareCategoriesLayout>
</PrivateRoute>
)
  })),

  ...EducationRoutes.map((currRoute)=>({
path:currRoute.route,
element : (
<PrivateRoute>
    <EducationLayout>
    {currRoute.component}
    </EducationLayout>
</PrivateRoute>
)
  })),

    ...HospitalRoutes.map((currRoute)=>({
path:currRoute.route,
element : (
<PrivateRoute>
    {currRoute.component}
</PrivateRoute>
)
  }))


]);



function App() {
  console.log(softwareCategoriesRoutes);

  return (
    <>
    <AuthProvider>
       <RouterProvider router={router} />  
    </AuthProvider>
   
    </>
  )
}

export default App
