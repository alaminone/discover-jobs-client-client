import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../provider/Authprovider';
import MypostCard from './MypostCard';

const MypostJobs = () => {
  const { user } = useContext(AuthContext);
  const [userJobs, setUserJobs] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`https://discover-jobs-giakqguz3-alamins-projects-be4aa773.vercel.app/api/myjobs?userEmail=${user.email}`)
        .then((response) => {
          setUserJobs(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  const handleJobDelete = (jobId) => {
    const updatedJobs = userJobs.filter((job) => job._id !== jobId);
    setUserJobs(updatedJobs);
  };

  return (
    <div className="bg-gray-100 my-10 py-8">
      <div className="max-w-5xl mx-auto space-y-4">
        {userJobs.map((job) => (
          <div key={job._id}>
            <MypostCard job={job} onDelete={handleJobDelete}></MypostCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MypostJobs;
