// Application.js
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

  const handleAccept = (jobId) => {
    
    const url = `http://localhost:5001/api/updateJobStatus/${jobId}`;
    const data = { status: "Accepted" };
  
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
  
  const handleReject = (jobId) => {
    // Send a POST request to update the job status to "Rejected"
    const url = `http://localhost:5001/api/updateJobStatus/${jobId}`;
    const data = { status: "Rejected" };
  
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Network response was not ok");
        }
        // Handle the response as needed
      })
      .catch((error) => {
        console.error("Fetch error:", error);
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
             handleAccept={handleAccept}
             handleReject={handleReject}></BidCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mybid;
