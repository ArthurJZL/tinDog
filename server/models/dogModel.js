const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://arthurjin1998:obOrj2Vo4RNhiJej@dogs.0ozfp.mongodb.net/?retryWrites=true&w=majority&appName=dogs';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'tindog',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

//sets a schema for the dogs collection
const dogSchema = new Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  hobbies: { type: [String], required: true },
  gender: { type: String, required: true },
  pictures: { type: [String], required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = { Dog };