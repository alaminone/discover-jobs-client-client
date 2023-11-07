import { createBrowserRouter } from "react-router-dom";
import Home from "../page/homePage/home/Home";
import Root from "../page/root/Root";
import Login from "../page/login/Login";
import Registration from "../page/registration/Registration";
import AddJobs from "../page/jobs/AddJobs";
import MypostJobs from "../page/mypostjobs/MypostJobs";

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
                path:"login",
                element:<Login></Login>
            },
            {
                path:"registration",
                element:<Registration></Registration>
            },
            {
                path:"addjobs",
                element:<AddJobs></AddJobs>
            },
            {
                path:"mypostjobs",
                element:<MypostJobs></MypostJobs>
            },
        ]
    }
])


export default router