import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import Home from "../../component/Home/Home";
import Courses from '../../component/Courses/Courses'
import Main from "../../layout/Main";
import Login from "../../component/Login/Login";
import Register from "../../component/Register/Register";
import CourseDetails from "../../component/CourseDetails/CourseDetails";
import Checkout from "../../component/Checkout/Checkout"
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../../component/Blog/Blog";
import Faq from '../../component/FAQ/Faq'


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://module-60-newsportal-express-server.vercel.app/courses')
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
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute> ,
                loader:({params})=>fetch(`https://module-60-newsportal-express-server.vercel.app/course/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
               path:'/faq',
               element:<Faq></Faq>
            
            }
           
        
        ]
    }
])