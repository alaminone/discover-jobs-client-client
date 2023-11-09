import  { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../provider/Authprovider';

const BidRequests = () => {
    const {user} = useContext(AuthContext);
  
  const [allbid, setAllBid] = useState([]);

  const userEmail = user.email
  const apiUrl = `http://localhost:5001/api/getConfirmedJobs?email=${userEmail}`;
  
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Bad response from the server");
        }
        return res.json();
      })
      .then((data) => setAllBid(data))
      .catch((error) => console.error("Fetch error:", error));
  }, [apiUrl]);



  const handleAcceptClick = (request) => {
    // Handle the "Accept" button click
    fetch(`http://localhost:5001/api/acceptBid/${request.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'Accepted' }),
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

  const handleRejectClick = (request) => {
    // Handle the "Reject" button click
    fetch(`http://localhost:5001/api/rejectBid/${request.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'Rejected' }),
    })
      .then((response) => {
        if (!response.ok) {
          throw  Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <div>
      <h1>Bid Requests</h1>
      <table>
        <thead>
          <tr>
            <th>Job title</th>
            <th>Email</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Accept button</th>
            <th>Reject button</th>
          </tr>
        </thead>
        <tbody>
          {allbid.map((allbid) => (
            <tr key={allbid.id}>
              <td>{allbid.jobTitle}</td>
              <td>{allbid.email}</td>
              <td>{allbid.deadline}</td>
              <td>{allbid.status}</td>
              <td>
                {allbid.status === 'pending' && (
                  <button onClick={() => handleAcceptClick(allbid)}>Accept</button>
                )}
              </td>
              <td>
                {allbid.status === 'pending' && (
                  <button onClick={() => handleRejectClick(allbid)}>Reject</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidRequests;
