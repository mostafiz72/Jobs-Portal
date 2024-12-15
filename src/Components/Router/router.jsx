import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../HomePage/Home";
import Register from "../Security/Register";
import Login from "../Security/Login";
import JobsDetails from "../JobDetails/JobsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import JobApply from "../JobApply/JobApply";
import MyApplications from "../MyApplication/MyApplications";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/jobs/:id", 
          element: <PrivateRoute><JobsDetails /></PrivateRoute>, 
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
          },
        { path: "/apply/:id", 
          element: <PrivateRoute><JobApply /></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`) 
          },
          {
            path: "/myApplication",
            element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
          }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ]);

export default router;
