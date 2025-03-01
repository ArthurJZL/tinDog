const express = require('express');
const router = express.Router();
const dogController = require('../controllers/dogController');
const authController = require('../controllers/authController');

// Create a new dog profile for the authenticated user
router.post('/create', authController, dogController.postDogs, (req, res) => {
  res.status(201).json(res.locals.newDog);
});

// Get all dogs for the authenticated user
router.get('/', authController, dogController.getUserDogs, (req, res) => {
  res.status(200).json(res.locals.userDogs);
});

// Add a dog to user's matches
router.post('/match/:dogId', authController, dogController.addDogToMatches, (req, res) => {
    res.status(200).json(res.locals.updatedUser);
  });

// Get all matched dogs for the authenticated user
router.get('/matches', authController, dogController.getMatchedDogs, (req, res) => {
    console.log('get Matched dogs route')
    res.status(200).json(res.locals.matchedDogs);
  });

module.exports = router;