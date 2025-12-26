const mongoose = require('mongoose');

const raccoonService = require('../services/raccoon');

const getHealth = (ctx) => {
  ctx.status = 200;
  ctx.body = {
    ok: true,
    uptimeSeconds: Math.floor(process.uptime()),
    mongo: {
      // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
      readyState: mongoose.connection.readyState,
    },
    redisRecommendations: {
      available: raccoonService.raccoonAvailable,
    },
  };
};

module.exports = {
  getHealth,
};
