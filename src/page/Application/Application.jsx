import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/Authprovider";
import ApplicationCard from "./ApplicationCard";


const Application = () => {
  const { user } = useContext(AuthContext);
  const [confirmedJobs, setConfirmedJobs] = useState([]);

  useEffect(() => {
    if (user && user.email) {
      const url = `http://localhost:5001/api/getConfirmedJobs?email=${user.email}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setConfirmedJobs(data);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
  }, [user]);
 

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl text-center my-5">Your All Application</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>phoneNumber</th>
              <th>address</th>
              <th>bidDate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {confirmedJobs.map((job) => (
              <ApplicationCard 
              key={job._id} 
              job={job}
            
               ></ApplicationCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Application;
