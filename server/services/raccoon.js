const raccoon = require('raccoon-heroku');

// / these are the default values but you can change them
raccoon.config.nearestNeighbors = 5; // number of neighbors you want to compare a user against
raccoon.config.className = 'hobby'; // prefix for your items (used for redis)
raccoon.config.numOfRecsStore = 30; // number of recommendations to store per user

raccoon.config.localMongoDbURL = 'mongodb://localhost/find-a-hobby'; // local mongo DB url
raccoon.config.remoteMongoDbURL = process.env.MONGO_HOSTAUTH; // remote mongo DB url
  // this should include all auth info
raccoon.config.localRedisPort = 6379; // local redis port
raccoon.config.localRedisURL = '127.0.0.1'; // local redis url
raccoon.config.remoteRedisPort = process.env.REDIS_PORT || 12000; // remote redis port
raccoon.config.remoteRedisURL = process.env.REDIS_URL; // remote redis url
raccoon.config.remoteRedisAuth = process.env.REDIS_AUTH; // remote redis auth
raccoon.config.localSetup = false; // IMPORTANT. whether you want to use local or remote databases

module.exports = raccoon;
