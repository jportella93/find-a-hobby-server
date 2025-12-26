const mongoose = require('mongoose');

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/find-a-hobby';

if (process.env.NODE_ENV === 'production' && !process.env.MONGODB_URI) {
  // On Render, there is no local MongoDB. Fail fast if not configured.
  console.error('MONGODB_URI is required in production.');
  process.exit(1);
}

mongoose.connect(dbURL)
  .then(() => console.log(`Mongoose connected to ${dbURL}`))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;

// for heroku
// module.exports = mongoose.connect(process.env.MONGODB_URI, console.log('mongoose connected'));
