
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/Authprovider";

import BidCard from "./BidCard";

const Mybid = () => {
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

 
  const handlebidConfirm = (id) => {
    fetch(`http://localhost:5001/api/bidRequests/${id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
    }, 
    body: JSON.stringify(confirmedJobs)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  };
  

 
  

  return (
    <div className="max-w-5xl mx-auto my-10">
      <h2 className="text-3xl text-center my-5">Your All Application</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead className="bg-red-300 text-white">
            <tr>
              
              <th>Email</th>
              <th>phoneNumber</th>
              <th>address</th>
              <th>bidDate</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {confirmedJobs.map((job) => (
             <BidCard  key={job._id}
             job={job}
             handlebidConfirm={handlebidConfirm}
             ></BidCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mybid;