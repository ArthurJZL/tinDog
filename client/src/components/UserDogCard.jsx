import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styling/UserDogCard.css';

const UserDogCard = ({ dog, token, onDelete }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/dogs/${dog._id}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/dogs/${dog._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onDelete(dog._id);
    } catch (err) {
      console.error('Error deleting dog:', err.message);
    }
  };

  return (
    <div className='user-dog-card'>
      <h2>{dog.name}</h2>
      <button onClick={handleViewDetails}>View Details</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

UserDogCard.propTypes = {
  dog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserDogCard;