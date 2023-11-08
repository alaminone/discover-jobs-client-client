// MypostCard.js
import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MypostCard = ({ job, onDelete, onUpdate }) => {
  const { _id, title, deadline, minPrice, maxPrice, description, posterPhotoURL, userPhotoURL } = job;

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleDelete = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`http://localhost:5001/api/jobs/${_id}`);
          if (response.data.deletedCount > 0) {
            Swal.fire('Deleted!', 'Your job has been deleted.', 'success');
            onDelete(_id); // Notify the parent component to remove the job
          }
        } catch (error) {
          console.error(error);
          // Handle error as needed
        }
      }
    });
  };

  return (
    <div
      className={`card card-side relative transition-transform transform ${
        hovered ? 'scale-105' : 'scale-100'
      } shadow-xl mx-2`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure className="relative">
        {posterPhotoURL && (
          <img src={posterPhotoURL} alt="" className="rounded-t-lg w-full" />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="text-xl text-green-500 mb-2">
          Price Range: min {minPrice} to max {maxPrice}
        </h2>
        <h3 className="text-xl text-blue-500 mb-2">Deadline: {deadline}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="absolute bottom-4 left-4">
          {userPhotoURL && (
            <img
              src={userPhotoURL}
              alt="User Photo"
              className="w-8 h-8 rounded-full"
            />
          )}
        </div>
        <div className="absolute bottom-4 space-x-6 right-4">
          <button
            className="btn bg-red-400 text-white rounded-full py-2 px-4 focus:outline-none"
            onClick={handleDelete}
          >
            Delete
          </button>
          <Link to={`/updatejobs/${_id}`}>
            <button
              className="btn bg-green-400 text-white rounded-full py-2 px-4 focus:outline-none"
              onClick={() => onUpdate(job)}
            >
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

MypostCard.propTypes = {
  job: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default MypostCard;
