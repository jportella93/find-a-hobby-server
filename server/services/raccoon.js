const dotenv = require('dotenv');
dotenv.config();

// Lazy initialization of raccoon to avoid startup crashes
let raccoonInstance = null;
let raccoonAvailable = false;

function getRaccoon() {
  if (raccoonInstance) {
    return raccoonInstance;
  }

  try {
    // Parse Redis URL to extract components for raccoon's old Redis client
    const redisUrl = process.env.REDIS_URL;
    let redisHost, redisPort, redisAuth;

    if (redisUrl && redisUrl.startsWith('redis://')) {
      // Parse URL like: redis://user:pass@host:port
      const url = new URL(redisUrl);
      redisHost = url.hostname;
      redisPort = url.port || '6379';
      // For Redis Cloud, use just the password part (not username:password)
      redisAuth = url.password || '';
    } else {
      // Fallback to separate env vars
      redisHost = process.env.REDIS_URL;
      redisPort = process.env.REDIS_PORT;
      redisAuth = process.env.REDIS_AUTH;
    }

    // Set raccoon-specific environment variables before requiring raccoon
    process.env.RACCOON_REDIS_URL = redisHost;
    process.env.RACCOON_REDIS_PORT = redisPort;
    process.env.RACCOON_REDIS_AUTH = redisAuth;

    const raccoon = require('raccoon');

    // Configure raccoon
    raccoon.config.nearestNeighbors = 5;
    raccoon.config.className = 'hobby';
    raccoon.config.numOfRecsStore = 30;

    // Set Redis config directly (as fallback, though environment variables should work)
    raccoon.config.redisUrl = redisHost;
    raccoon.config.redisPort = redisPort;
    raccoon.config.redisAuth = redisAuth;

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
