const raccoon = require('raccoon');

// / these are the default values but you can change them
raccoon.config.nearestNeighbors = 5; // number of neighbors you want to compare a user against
raccoon.config.className = 'hobby'; // prefix for your items (used for redis)
raccoon.config.numOfRecsStore = 30; // number of recommendations to store per user

// raccoon.config.remoteRedisURL = process.env.REDIS_URL // remote redis url

module.exports = raccoon;
