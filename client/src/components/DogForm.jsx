import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styling/DogForm.css';

const DogForm = ({ token, dog, setDog }) => {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: '',
    location: '',
    hobbies: '',
    gender: '',
    pictures: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (dog) {
      setFormData(dog);
    }
  }, [dog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = dog
        ? `http://localhost:3000/dogs/${dog._id}`
        : 'http://localhost:3000/user/dogs/create';
      const method = dog ? 'patch' : 'post';
      const response = await axios[method](url, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDog(response.data);
      navigate('/dogs'); // Redirect to /dogs after submission
    } catch (err) {
      console.error('Error submitting dog info:', err.message);
    }
  };

  return (
    <div className="dog-form-container">
      <h1 className="dog-form-title">Submit Your Dog</h1>
      <form onSubmit={handleSubmit} className="dog-form">
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'
          required
        />
        <input
          type='text'
          name='breed'
          value={formData.breed}
          onChange={handleChange}
          placeholder='Breed'
          required
        />
        <input
          type='number'
          name='age'
          value={formData.age}
          onChange={handleChange}
          placeholder='Age'
          required
        />
        <input
          type='text'
          name='location'
          value={formData.location}
          onChange={handleChange}
          placeholder='Location'
          required
        />
        <input
          type='text'
          name='hobbies'
          value={formData.hobbies}
          onChange={handleChange}
          placeholder='Hobbies'
          required
        />
        <input
          type='text'
          name='gender'
          value={formData.gender}
          onChange={handleChange}
          placeholder='Gender'
          required
        />
        <input
          type='text'
          name='pictures'
          value={formData.pictures}
          onChange={handleChange}
          placeholder='Pictures'
          required
        />
        <button type='submit'>
          {dog ? 'Update Dog Info' : 'Create Dog Info'}
        </button>
      </form>
    </div>
  );
};

export default DogForm;