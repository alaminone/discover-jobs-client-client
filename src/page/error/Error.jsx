import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
           



           

            <img src={'https://i.ibb.co/cNT1tNm/romson-preechawit-Vy2c-Hqm0m-Cs-unsplash.jpg'} alt="" />
            <div>
                <Link to={'/'}><button className="btn btn-outline btn-error">
                    back to home
                </button></Link>
            </div>

           
        </div>
    );
};

export default Error;