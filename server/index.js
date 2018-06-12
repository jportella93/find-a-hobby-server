'use strict';
require('dotenv').config()

const Koa = require('koa')
const app = new Koa();

const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser'); //original
const cors = require('koa-cors'); //original

const router = require('./router');
// const session = require('./services/session')
const jwt = require('./services/jwt')

//Connect to mongodb
require('./models/db')

const PORT = process.env.PORT || 3000

const corsOptions = {
     origin: true,
     credentials: true
   };

app
  .use(cors())
  .use(logger())
  .use(jwt)
  .use(bodyParser())
  .use(router.routes())

const server = app.listen(PORT).on('error', err => console.log(err))


  // TODO: store images somewhere, right now is working with image links
module.exports = server;
