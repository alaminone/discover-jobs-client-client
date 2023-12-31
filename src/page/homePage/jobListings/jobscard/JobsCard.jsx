import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const JobsCard = ({ job }) => {
  const { _id,title, deadline, priceRange, description, posterPhotoURL, userPhotoURL } = job;

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`card border card-side  transition-transform transform ${
        hovered ? 'scale-105' : 'scale-100'
      } shadow-xl mx-2`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure className="">
        {posterPhotoURL && (
          <img src={posterPhotoURL} alt="" className="rounded-t-lg w-full" />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="text-xl text-green-500 mb-2">Price Range: {priceRange}</h2>
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
        <div className="">
          <Link to={`/jobdetails/${_id}`}>
          <button
            className="btn w-full  btn-outline text-red-500 rounded-full py-2 px-4 focus:outline-none"
          >
            Bid Now
          </button>
          </Link>
      </div>
        </div>
       
    </div>
  );
};

JobsCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobsCard;
