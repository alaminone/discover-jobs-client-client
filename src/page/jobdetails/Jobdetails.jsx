import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/Authprovider';

const JobDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [jobDetails, setJobDetails] = useState([]);
  const navigate = useNavigate();

  const [additionalInfo, setAdditionalInfo] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [jobRelatedInfo, setJobRelatedInfo] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/jobs/${id}`)
      .then((response) => {
        setJobDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleConfirmation = () => {
    const data = {
      jobId: id,
      userEmail: user.email,
      jobDetails: {
        title: jobDetails.title,
        deadline: jobDetails.deadline,
        category: jobDetails.category,
      },
      additionalInfo,
      phoneNumber,
      address,
      jobRelatedInfo,
    };

 
         
          axios.post('http://localhost:5001/api/getConfirmedJobs', data)
            .then((response) => {
              if (response.data.insertedId) {
                Swal.fire({
                  title: 'Success!',
                  text: 'Application to confirm job.',
                  icon: 'success',
                });
                navigate('/');
              } else {
                Swal.fire({
                    title: 'Success!',
                    text: 'Application Failed Please try again .',
                    icon: 'error',
                  });
                  
              }
            })
            .catch((error) => {
              console.error(error);
              Swal.fire({
                title: 'Error',
                text: 'An error occurred while confirming the job. Please try again later.',
                icon: 'error',
              });
            });
        
   
  };
  

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{jobDetails.title}</h2>
      <p className="text-gray-600 mb-4">{jobDetails.description}</p>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Additional Information:</label>
        <textarea
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          rows="4"
          className="w-full px-4 py-2 border rounded"
          placeholder="Provide additional information here..."
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Job-Related Information:</label>
        <textarea
          value={jobRelatedInfo}
          onChange={(e) => setJobRelatedInfo(e.target.value)}
          rows="4"
          className="w-full px-4 py-2 border rounded"
          placeholder="Provide job-related information here..."
        />
      </div>

      <p className="text-gray-600 mb-4">
        Confirmation Date: {new Date().toDateString()}
      </p>

      <button
        onClick={handleConfirmation}
        className="bg-green-500 text-white px-4 py-2 rounded hover-bg-green-600"
      >
        Confirm Job
      </button>
    </div>
  );
};

export default JobDetails;
