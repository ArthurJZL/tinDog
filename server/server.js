const path = require('path');
const express = require('express');
const cors = require('cors');
//require routers and auth controller
const dogRouter = require('./routes/dogRouter');
const authRouter = require('./routes/authRouter');
const userDogRouter = require('./routes/userDogRouter');
const authController = require('./controllers/authController');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

//middleware to parse JSON bodies
app.use(express.json());

// define route handlers
app.use('/dogs', authController, dogRouter);
app.use('/auth', authRouter);
app.use('/user/dogs', userDogRouter);

//Basic route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

//Error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});