import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main"
import Login from "./components/login/login";
import HomeReactjs from "./components/home/homeReactjs";
import Blog from "./components/home/blog";
import Dashboard from "./components/home/dashboard";
const router = createBrowserRouter([

  {
    path: '/',
    element: <Main/>,
    children: [
        {
        path: "/",
        element:<Dashboard />

      },
      {
        path: "/homeReact",
        element:<HomeReactjs />

      },
      {
        path: "/blog",
        element:<Blog/>

      },
    //   {
    //     path: "/thong-tin-tho",
    //     element: <InfoWorkers />

    //   },
    //   {
    //     path: "/tim-kiem-khach-hang",
    //     element: <SearchCustomer/>

    //   },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },


])
export default router;
