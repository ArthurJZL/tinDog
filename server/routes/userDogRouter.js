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

module.exports = router;