import { useContext, useEffect, useState } from 'react';
import BidrequestCard from './BidrequestCard';
import { AuthContext } from '../../provider/Authprovider';

const BidRequests = () => {
  const { user } = useContext(AuthContext);
  const [bidRequests, setBidRequests] = useState([]);

  console.log(bidRequests);

  useEffect(() => {
    if (user && user.email) {
      fetch(`http://localhost:5001/api/bidRequests`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setBidRequests(data);
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
    }
  }, [user]);

  const handleAccept = (bidId) => {
    const updatedBidRequests = bidRequests.map((bid) => {
      if (bid._id === bidId) {
        return { ...bid, status: 'Accepted' };
      }
      return bid;
    });
    setBidRequests(updatedBidRequests);

    
    const url = `http://localhost:5001/api/acceptBid/${bidId}`;
    const data = { status: 'Accepted' };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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

  const handleReject = (bidId) => {
  
    const updatedBidRequests = bidRequests.map((bid) => {
      if (bid._id === bidId) {
        return { ...bid, status: 'Rejected' };
      }
      return bid;
    });
    setBidRequests(updatedBidRequests);

    const url = `http://localhost:5001/api/rejectBid/${bidId}`;
    const data = { status: 'Rejected' };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw  Error('Network response was not ok');
        }
        
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  };

  return (
    <div className="max-w-5xl mx-auto my-10">
      <h2 className="text-3xl text-center my-5">Bid Requests</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead className="bg-red-300 text-white">
            <tr>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Bid Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bidRequests.map((bid) => (
              <BidrequestCard
                key={bid._id}
                bid={bid}
                handleAccept={handleAccept}
                handleReject={handleReject}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequests;
