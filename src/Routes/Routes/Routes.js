import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import Home from "../../component/Home/Home";
import Courses from '../../component/Courses/Courses'
import Main from "../../layout/Main";
import Login from "../../component/Login/Login";
import Register from "../../component/Register/Register";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:()=>fetch('http://localhost:4000/courses')
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])