import React from 'react';
import PropTypes from 'prop-types';
import DogCard from '../components/DogCard';
import './Cards.css';

const Cards = ({ dogs = [], token }) => {
  return (
    <div className='cards-container'>
      <h1 >Meet some Dogs！</h1>
      {dogs.map((dog) => (
        <DogCard key={dog._id} dog={dog} token={token} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
  token: PropTypes.string.isRequired,
};

export default Cards;
