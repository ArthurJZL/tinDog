import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DogCard = ({ dog }) => {

  const navigate = useNavigate();

  const handleViewDetails = ()=>{
    navigate(`/dogs/${dog._id}`);
  };

  return (
    <div className='dog-card'>
      <h2>{dog.name}</h2>
      <div>
        {dog.pictures.map((url, index) => (
          <img key={index} src={url} alt={`${dog.name} ${index}`} />
        ))}
      </div>
      <button onClick = {handleViewDetails}>View Details</button>
    </div>
  );
};

DogCard.propTypes = {
  dog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default DogCard;
