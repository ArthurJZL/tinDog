const models = require('../models/dogModel');
const User = require('../models/userModel');

const dogController = {};

//get all dogs
dogController.getDogs = async (req, res, next) => {
  res.locals.dogs = await models.Dog.find();
  return next();
};

//get one dog info by ID
dogController.getOneDog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const theDog = await models.Dog.findById(id);
    if (!theDog) {
      return res.status(404).json({ error: 'Dog not found' });
    }
    res.locals.theDog = theDog;
    return next();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// Get user-specific dog info
dogController.getUserDogs = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const userDogs = await models.Dog.find({ owner: userId });
    res.locals.userDogs = userDogs;
    return next();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//add a new dog into database
dogController.postDogs = async (req, res, next) => {
  const { name, breed, age, location, hobbies, gender, pictures } = req.body;
  const owner = req.user.userId;

  const newDog = new models.Dog({
    name,
    breed,
    age,
    location,
    hobbies,
    gender,
    pictures,
    owner,
  });

  await newDog.save();

  // Add the new dog to the user's dogs array
  await User.findByIdAndUpdate(owner, { $push: { dogs: newDog._id } });

  res.locals.newDog = newDog;
  return next();
};

//update one dog info by ID
dogController.updateDog = async (req, res, next) => {
  const { id } = req.params;
  const { name, breed, age, location, hobbies, gender, pictures } = req.body;

  const updatedDog = await models.Dog.findByIdAndUpdate(
    id,
    { name, breed, age, location, hobbies, gender, pictures },
    { new: true, runValidators: true }
  );

  res.locals.updatedDog = updatedDog;
  return next();
};

//delete one dog by ID
dogController.deleteDog = async (req, res, next) => {
  const { id } = req.params;
  const deletedDog = await models.Dog.findByIdAndDelete(id);
  return next();
};

//controller for deleting all data entries in case things screws up
// dogController.deleteAllDogs = async (req, res, next) => {
//   await models.Dog.deleteMany({});
//   next();
// };

module.exports = dogController;
