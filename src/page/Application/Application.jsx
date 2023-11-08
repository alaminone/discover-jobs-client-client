import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/Authprovider";

const Application = () => {
    const { user } = useContext(AuthContext);
    const [application, setApplication] = useState([]);

    useEffect(() => {
     
        if (user && user.email) {
            const url = `http://localhost:5001/api/confirmJob?email=${user.userEmail}`;
            fetch(url)
                .then(res => res.json())
                .then(data => console.log(data))
            
        }
    }, [user]); 

    return (
        <div>
            {/* Your component content */}
        </div>
    );
};

export default Application;
