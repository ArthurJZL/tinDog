import React from 'react';
import PropTypes from 'prop-types';
import UserDogs from '../components/UserDogs';
import Cards from '../containers/Cards';
import './MainContainer.css';

const MainContainer = ({ dogs, token }) => {
  return (
    <div className='main-container'>
      <section className='user-dog-section'>
        <UserDogs token={token} />
      </section>
      <section className='cards-section'>
        <Cards dogs={dogs} />
      </section>
    </div>
  );
};

MainContainer.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  token: PropTypes.string.isRequired,
};

export default MainContainer;
