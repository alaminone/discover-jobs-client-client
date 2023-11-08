import { createBrowserRouter } from "react-router-dom";
import Home from "../page/homePage/home/Home";
import Root from "../page/root/Root";
import Login from "../page/login/Login";
import Registration from "../page/registration/Registration";
import AddJobs from "../page/jobs/AddJobs";
import MypostJobs from "../page/mypostjobs/MypostJobs";
import UpdateJob from "../page/updatejobs/Updatejobs";

import Jobdetails from "../page/jobdetails/Jobdetails";
import Application from "../page/Application/Application";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/registration",
                element:<Registration></Registration>
            },
            {
                path:"/addjobs",
                element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path: "/updatejobs/:id",
                element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5001/api/jobs/${params.id}`)
            },
            {
                path:"/mypostjobs",
                element:<PrivateRoute><MypostJobs></MypostJobs></PrivateRoute>
            },
            {
                path:"/jobdetails/:id",
                element:<PrivateRoute><Jobdetails></Jobdetails></PrivateRoute>
            },
            {
                path:"/application",
                element:<PrivateRoute><Application></Application></PrivateRoute>
            }
        ]
    }
])


export default router