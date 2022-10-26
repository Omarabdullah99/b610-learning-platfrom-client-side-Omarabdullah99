import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import Home from "../../component/Home/Home";
import Courses from '../../component/Courses/Courses'
import Main from "../../layout/Main";
import Login from "../../component/Login/Login";
import Register from "../../component/Register/Register";
import CourseDetails from "../../component/CourseDetails/CourseDetails";
import Checkout from "../../component/Checkout/Checkout";
import Navber from "../../component/Navber/Navber";


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
                loader:()=>fetch('https://module-60-newsportal-express-server.vercel.app/courses')
            },
            {
              path:'/course/:id',
              element:<CourseDetails></CourseDetails>,
              loader:({params})=> fetch(`https://module-60-newsportal-express-server.vercel.app/course/${params.id}`)
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'/checkout/:id',
                element:<Checkout></Checkout>,
                loader:({params})=>fetch(`https://module-60-newsportal-express-server.vercel.app/course/${params.id}`)
            }
           
        
        ]
    }
])