import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserDogCard from './UserDogCard';
import '../styling/UserDogs.css';

const UserDogs = ({ token }) => {
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user/dogs', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDogs(response.data);
      } catch (err) {
        console.error('Error fetching user dogs:', err.message);
      }
    };

    fetchDogs();
  }, [token]);

  const handleDeleteDog = (dogId) => {
    setDogs(dogs.filter((dog) => dog._id !== dogId));
  };

  const handleAddDog = () => {
    navigate('/add-dog');
  };

  const handleSeeMatches = () =>{
    navigate('/matches')
  }

  return (
    <div className="user-dogs-container">
      <h1 className="user-dogs-title">Your Dogs</h1>
      <div className="user-dogs-cards">
        {dogs.map((dog) => (
          <UserDogCard key={dog._id} dog={dog} token={token} onDelete={handleDeleteDog} />
        ))}
      </div>
      <button onClick={handleAddDog} className="add-dog-button">Add a New Dog</button>
      <button onClick = {handleSeeMatches}>See My Matches</button>
    </div>
  );
};

export default UserDogs;