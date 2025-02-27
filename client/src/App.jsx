import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Login from './logIn';
import MainContainer from './containers/MainContainer';
import DogForm from './components/DogForm';
import DogDetails from './components/DogDetails';
import './styling/App.css';

const App = () => {
  const [token, setToken] = useState(null);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    if (token) {
      axios
        .get('http://localhost:3000/dogs', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setDogs(response.data))
        .catch((error) => console.error('Error fetching dogs:', error));
    }
  }, [token]);

  return (
    <Router>
      <div className="app-container">
        <h1 className="app-title">TinDog</h1>
        <Routes>
          <Route path='/' element={<Login setToken={setToken} />} />
          <Route
            path='/dogs'
            element={
              token ? (
                <MainContainer dogs={dogs} token={token} />
              ) : (
                <Login setToken={setToken} />
              )
            }
          />
          <Route
            path='/add-dog'
            element={
              token ? (
                <DogForm
                  token={token}
                  setDog={(newDog) => setDogs([...dogs, newDog])}
                />
              ) : (
                <Login setToken={setToken} />
              )
            }
          />
          <Route
            path='/dogs/:id'
            element={
              token ? (
                <DogDetails token={token} />
              ) : (
                <Login setToken={setToken} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;