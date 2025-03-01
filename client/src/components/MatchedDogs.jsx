import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import DogCard from './DogCard';

const MatchedDogs = ({ token }) => {
  const [matchedDogs, setMatchedDogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatchedDogs = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/user/dogs/matches',
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMatchedDogs(response.data);
      } catch (err) {
        console.error('Error fetching matched dogs', err.message);
      }
    };

    fetchMatchedDogs();
  }, [token]);

  const handleViewDetails = (dogId) => {
    navigate(`/dogs/${dogId}`);
  };

  return (
    <div className='matched-dogs-container'>
      <h1 className='matched-dogs-title'>Your Matches</h1>
      <div className='matched-dogs-cards'>
        {matchedDogs.map((dog) => (
          <div key={dog.id}>
            <DogCard key={dog._id} dog={dog} token={token} />
            <button onClick={() => handleViewDetails(dog._id)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

MatchedDogs.propTypes = {
  token: PropTypes.string.isRequired,
};

export default MatchedDogs;
