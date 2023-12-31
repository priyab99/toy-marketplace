import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToy from "../Pages/MyToy/MyToy";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import Notfound from "../Pages/Notfound/Notfound";

const router = createBrowserRouter([
    {
        

      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element: <Blogs></Blogs>

        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element: <Signup></Signup>
        },
        {
            path:'/addtoy',
            element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path:'/alltoy',
            element: <AllToys></AllToys>,
            loader: ()=> fetch('https://assignment-eleven-server-blond.vercel.app/toy')

        },
        {
            path:'/mytoys',
            element: <PrivateRoute><MyToy></MyToy></PrivateRoute>


        },
        {
            path:'/updatetoy/:id',
            element: <UpdateToy></UpdateToy>
        },
        {
            path:'/toy/:toyId',
            element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            loader:()=>fetch('https://assignment-eleven-server-blond.vercel.app/toy')
        }
       
       
      ]
     
    },
    {
        path:'*',
        element: <Notfound/>,
    }
  ]);

  export default router;