import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../provider/Authprovider';
import JobsCard from '../homePage/jobListings/jobscard/JobsCard';



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
<div className='bg-gray-100 my-10 py-8'>
<div className='max-w-5xl mx-auto  space-y-4'>
      {userJobs.map((job) => (
        <JobsCard key={job._id} job={job}></JobsCard>
      ))}
    </div>
</div>
  );
};

export default MypostJobs;
