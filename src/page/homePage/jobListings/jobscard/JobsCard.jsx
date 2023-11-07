import PropTypes from 'prop-types';
import { useState } from 'react';

const JobsCard = ({ job }) => {
  const { title, deadline, priceRange, description, posterPhotoURL, userPhotoURL } = job;

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
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
        <div className="absolute bottom-4 right-4">
          <button
            className="btn btn-primary rounded-full py-2 px-4 focus:outline-none"
          >
            Bid Now
          </button>
        </div>
      </div>
    </div>
  );
};

JobsCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobsCard;
