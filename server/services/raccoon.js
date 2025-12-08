// Lazy initialization of raccoon to avoid startup crashes
let raccoonInstance = null;
let raccoonAvailable = false;

function getRaccoon() {
  if (raccoonInstance) {
    return raccoonInstance;
  }

  try {
    const raccoon = require('raccoon');

    // Configure raccoon
    raccoon.config.nearestNeighbors = 5;
    raccoon.config.className = 'hobby';
    raccoon.config.numOfRecsStore = 30;

    raccoon.config.localMongoDbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/find-a-hobby';
    raccoon.config.remoteMongoDbURL = process.env.MONGO_HOSTAUTH;
    raccoon.config.localRedisPort = 6379;
    raccoon.config.localRedisURL = '127.0.0.1';
    raccoon.config.remoteRedisPort = process.env.REDIS_PORT || 12000;
    raccoon.config.remoteRedisURL = process.env.REDIS_URL;
    raccoon.config.remoteRedisAuth = process.env.REDIS_AUTH;
    raccoon.config.localSetup = true;

    raccoonInstance = raccoon;
    raccoonAvailable = true;

    console.log('Raccoon initialized successfully');
    return raccoon;
  } catch (err) {
    console.warn('Raccoon initialization failed, recommendations disabled:', err.message);
    raccoonAvailable = false;
    return null;
  }
}

module.exports = {
  get raccoon() {
    return getRaccoon();
  },
  get raccoonAvailable() {
    // Try to initialize if not already done
    if (!raccoonInstance && !raccoonAvailable) {
      getRaccoon();
    }
    return raccoonAvailable;
  }
};

//
// redis://
// h:p2a29af429f190dc2f803ff41b43ab0767adc74be1fd23222431ff9d7e396d071
// @
// ec2-18-208-87-147.compute-1.amazonaws.com
// :
// 15529
