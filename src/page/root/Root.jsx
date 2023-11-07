import { Outlet } from "react-router-dom";
import Navbar from "../../sheard/navbar/Navbar";
import Footer from "../../sheard/footer/Footer";





const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;