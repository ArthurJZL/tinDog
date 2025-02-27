const express = require('express');
const dogController = require('../controllers/dogController');
const authController = require('../controllers/authController');

const router = express.Router();

// Get all dogs
router.get('/', dogController.getDogs, (req, res) => {
  console.log('enter get dog router');
  res.status(200).json(res.locals.dogs);
});

// Get user-specific dogs
router.get('/user', authController, dogController.getUserDogs, (req, res) => {
  console.log('enter get user dog router');
  res.status(200).json(res.locals.userDogs);
});

// Get one dog by ID
router.get('/:id', authController, dogController.getOneDog, (req, res) => {
  console.log('enter get one dog router');
  res.status(200).json(res.locals.theDog);
});

// Create a new dog
router.post('/', authController, dogController.postDogs, (req, res) => {
  console.log('enter post dog router');
  res.status(201).json(res.locals.newDog);
});

// Update a dog by ID
router.patch('/:id', authController, dogController.updateDog, (req, res) => {
  console.log('enter patch dog router');
  res.status(200).json(res.locals.updatedDog);
});

// Delete a dog by ID
router.delete('/:id', authController, dogController.deleteDog, (req, res) => {
  console.log('enter delete dog router');
  res.status(200).json({ message: 'dog deleted' });
});

module.exports = router;
