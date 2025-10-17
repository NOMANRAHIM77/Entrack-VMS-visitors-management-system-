import { useState } from 'react'
import './App.css'
import FrontPage from './pages/FrontPage'
import Layout from './layout/Layout'
import appRoutes from './routes/appRoutes'


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
  }))
]);



function App() {
  
  return (
    <>
    <RouterProvider router={router} />     
    </>
  )
}

export default App
