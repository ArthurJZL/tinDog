import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../styling/DogCard.css';

const DogCard = ({ dog, token }) => {
  const handleLike = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/user/dogs/match/${dog._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Dog liked:', response.data);
    } catch (error) {
      console.error('Error liking dog:', error);
    }
  };

  return (
    <div className='dog-card'>
      <h2>{dog.name}</h2>
      <div>
        {dog.pictures.map((url, index) => (
          <img key={index} src={url} alt={`${dog.name} ${index}`} />
        ))}
      </div>
      <button onClick={handleLike}>Like</button>
    </div>
  );
};

DogCard.propTypes = {
  dog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
};

export default DogCard;
