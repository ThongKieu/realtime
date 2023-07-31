import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main"
import Login from "./components/login/login";
import SearchCustomer from "./components/home/searchCus";
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
        path: "/tim-khach-hang",
        element:<SearchCustomer />

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
