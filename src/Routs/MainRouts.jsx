import { createBrowserRouter } from "react-router-dom";
import Home from "../page/homePage/home/Home";
import Root from "../page/root/Root";
import Login from "../page/login/Login";
import Registration from "../page/registration/Registration";
import AddJobs from "../page/jobs/AddJobs";
import MypostJobs from "../page/mypostjobs/MypostJobs";
import UpdateJob from "../page/updatejobs/Updatejobs";

import Jobdetails from "../page/jobdetails/Jobdetails";
import Application from "../page/Application/Mybid";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import BidRequests from "../page/bidreqest/Bidreqests";


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
                loader: ({ params }) => fetch(`https://discover-jobs-9w9at6n98-alamins-projects-be4aa773.vercel.app/api/jobs/${params.id}`)
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
                path:"/mybits",
                element:<PrivateRoute><Application></Application></PrivateRoute>
            },
            {
                path:"/bidrequst",
                element:<PrivateRoute><BidRequests></BidRequests></PrivateRoute>
            }
        ]
    }
])


export default router