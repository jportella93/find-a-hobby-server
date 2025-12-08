

const mongoose = require('mongoose');

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/find-a-hobby';

mongoose.connect(dbURL)
  .then(() => console.log(`Mongoose connected to ${dbURL}`))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;

// for heroku
// module.exports = mongoose.connect(process.env.MONGODB_URI, console.log('mongoose connected'));
