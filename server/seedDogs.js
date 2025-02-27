const mongoose = require('mongoose');
const { Dog } = require('./models/dogModel');

const MONGO_URI =
  'mongodb+srv://arthurjin1998:obOrj2Vo4RNhiJej@dogs.0ozfp.mongodb.net/?retryWrites=true&w=majority&appName=dogs';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'tindog', // Correct database name
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const seedDogs = async () => {
  const dogs = [
    {
      name: 'Sir Barksalot',
      breed: 'Golden Retriever',
      age: 3,
      location: 'New York',
      hobbies: ['chasing imaginary squirrels', 'singing opera'],
      gender: 'Male',
      pictures: [
        'https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg',
      ],
    },
    {
      name: 'Professor Wigglebutt',
      breed: 'Husky',
      age: 5,
      location: 'California',
      hobbies: ['dancing with shadows', 'eating ice cubes'],
      gender: 'Male',
      pictures: [
        'https://pangovet.com/wp-content/uploads/2024/06/siberian-husky-sitting_Aleksandr-Abrosimov-Shutterstock.jpg',
      ],
    },
    {
      name: 'Captain Sniffer',
      breed: 'Beagle',
      age: 4,
      location: 'Texas',
      hobbies: ['detecting ghost smells', 'barking at abstract art'],
      gender: 'Male',
      pictures: [
        'https://thepetlabco.com/learn/_next/image?url=https%3A%2F%2Fblog.thepetlabco.com%2Fwp-content%2Fuploads%2F2024%2F06%2Fshutterstock_2294314869-1.jpg&w=3840&q=75',
      ],
    },
    {
      name: 'Dr. Barkley',
      breed: 'Bulldog',
      age: 2,
      location: 'Florida',
      hobbies: ['studying human behavior', 'napping on clouds'],
      gender: 'Male',
      pictures: [
        'https://geniusvets.s3.amazonaws.com/gv-dog-breeds/english-bulldog-1.jpg',
      ],
    },
    {
      name: 'Miss Wiggleton',
      breed: 'Poodle',
      age: 6,
      location: 'Washington',
      hobbies: ['performing stand-up comedy', 'philosophizing about treats'],
      gender: 'Female',
      pictures: [
        'https://www.trupanion.com/images/trupanionwebsitelibraries/pet-blogs/standard-poodle-white-1-.jpg?sfvrsn=f9231058_6',
      ],
    },
  ];

  try {
    await Dog.deleteMany({});
    await Dog.insertMany(dogs);
    console.log('Fake dog data inserted successfully');
  } catch (err) {
    console.error('Error inserting fake dog data:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedDogs();
