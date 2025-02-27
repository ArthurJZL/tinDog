import React from 'react';
import PropTypes from 'prop-types';
import DogCard from '../components/DogCard';
import './Cards.css'

const Cards = ({ dogs = [] }) => {
  return (
    <div className='cards-container'>
      {dogs.map((dog) => (
        <DogCard key={dog._id} dog={dog} />
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
};

export default Cards;
