import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/all-properties",
          element: <AllProperties></AllProperties>
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
      ]
    },
  ]);