
require('dotenv').config();

const Koa = require('koa');

const app = new Koa();

const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser'); // original
// const cors = require('koa-cors'); // original
const cors = require('@koa/cors');

const router = require('./router');
// const session = require('./services/session')
const jwt = require('./services/jwt');

// Connect to mongodb
require('./models/db');

// Initialize raccoon (Redis connection) on startup
const raccoonService = require('./services/raccoon');
raccoonService.raccoon; // Trigger initialization

const PORT = process.env.PORT || 3000;

app
  .use(cors())
  .use(logger())
  .use(jwt)
  .use(bodyParser())
  .use(router.routes());

const server = app.listen(PORT, () => {
  console.log(`find a Hobby! Server connected on port ${PORT}`);
}).on('error', err => console.log(err));


// TODO: store images somewhere, right now is working with image links
module.exports = server;
