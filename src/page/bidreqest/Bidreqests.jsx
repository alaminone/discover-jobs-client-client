import { useContext, useEffect, useState } from 'react';
import BidrequestCard from './BidrequestCard';
import { AuthContext } from '../../provider/Authprovider';
import axios from 'axios';

const BidRequests = () => {
  const { user } = useContext(AuthContext);
  const [bidRequests, setBidRequests] = useState([]);

  useEffect(() => {
    // Define a function to fetch bid requests using Axios
    const fetchBidRequests = async () => {
      try {
        const response = await axios.get('https://discover-jobs-9w9at6n98-alamins-projects-be4aa773.vercel.app/api/bidRequests');
        setBidRequests(response.data);
      } catch (error) {
        console.error('Axios error:', error);
      }
    };

    if (user) {
      fetchBidRequests();
    }
  }, [user]);

  const handleAccept = async (bidId) => {
    // Make an API call to update the status to 'Accepted' using Axios
    try {
      await axios.post(`https://discover-jobs-9w9at6n98-alamins-projects-be4aa773.vercel.app/api/acceptBid/${bidId}`, {
        status: 'Accepted',
      });

      // Update the status in the UI
      const updatedBidRequests = bidRequests.map((bid) => {
        if (bid._id === bidId) {
          return { ...bid, status: 'Accepted' };
        }
        return bid;
      });
      setBidRequests(updatedBidRequests);
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  const handleReject = async (bidId) => {
    // Make an API call to update the status to 'Rejected' using Axios
    try {
      await axios.post(`https://discover-jobs-9w9at6n98-alamins-projects-be4aa773.vercel.app/api/rejectBid/${bidId}`, {
        status: 'Rejected',
      });

      // Update the status in the UI
      const updatedBidRequests = bidRequests.map((bid) => {
        if (bid._id === bidId) {
          return { ...bid, status: 'Rejected' };
        }
        return bid;
      });
      setBidRequests(updatedBidRequests);
    } catch (error) {
      console.error('Axios error:', error);
    }
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
