import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../provider/Authprovider';
import JobsCard from '../homePage/jobListings/JobsCard';


const MypostJobs = () => {
  const { user } = useContext(AuthContext);
  const [userJobs, setUserJobs] = useState([]);

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:5001/api/jobs?userEmail=${user.email}`)
        .then((response) => {
          setUserJobs(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  return (
    <div>
      {userJobs.map((job) => (
        <JobsCard key={job._id} job={job}></JobsCard>
      ))}
    </div>
  );
};

export default MypostJobs;
