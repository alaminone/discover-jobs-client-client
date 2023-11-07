import PropTypes from 'prop-types';


const JobsCard = ({ job }) => {
  const { title, deadline, priceRange, description, posterPhotoURL } = job;
  

  return (
    <div className="card card-side bg-base-100 shadow-xl mx-2">
      <figure>
        {posterPhotoURL && <img src={posterPhotoURL} alt="" />}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        
        <h2>{priceRange}</h2>
        <h3>{deadline}</h3>
        <p>{description}.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Bid now</button>
        </div>
      </div>
    </div>
  );
};

JobsCard.propTypes = {
  job: PropTypes.object.isRequired
};

export default JobsCard;
