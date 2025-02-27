import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styling/DogDetails.css';

const DogDetails = ({ token }) => {
  const { id } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    const fetchDogDetails = async () => {
      try {
        console.log('Fetching dog details with id:', id);
        console.log('Using token:', token);
        const response = await axios.get(`http://localhost:3000/dogs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDog(response.data);
      } catch (err) {
        console.error('Error fetching dog details', err.message);
      }
    };

    fetchDogDetails();
  }, [id, token]);

  if (!dog) {
    return <div>Loading...</div>;
  }
  return (
    <div className='dog-details'>
      <h2>{dog.name}</h2>
      <p>
        <strong>Breed:</strong> {dog.breed}
      </p>
      <p>
        <strong>Age:</strong> {dog.age}
      </p>
      <p>
        <strong>Location:</strong> {dog.location}
      </p>
      <p>
        <strong>Hobbies:</strong> {dog.hobbies.join(', ')}
      </p>
      <p>
        <strong>Gender:</strong> {dog.gender}
      </p>
      <div className='dog-pictures'>
        {dog.pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`${dog.name} ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

DogDetails.propTypes = {
  token: PropTypes.string.isRequired,
};

export default DogDetails;