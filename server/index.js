'use strict';
const Koa = require('koa')
const app = new Koa();

const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const router = require('./router');
const session = require('./services/session')

//Connect to mongodb
require('./models/db')

const PORT = 3000;

app
  .use(logger())
  .use(session)
  .use(bodyParser())
  .use(router.routes())

app
  .listen(PORT, console.log(`Server listening on port ${PORT}`))
