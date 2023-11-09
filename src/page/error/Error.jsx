import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Error = () => {
    return (
        <div>
            <Helmet>
            <title>DJobs | Error</title>

            <img src={'https://i.ibb.co/cNT1tNm/romson-preechawit-Vy2c-Hqm0m-Cs-unsplash.jpg'} alt="" />
            <div>
                <Link to={'/'}><button className="btn btn-outline btn-error">
                    back to home
                </button></Link>
            </div>

            </Helmet>
           
        </div>
    );
};

export default Error;