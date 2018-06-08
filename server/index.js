'use strict';
const Koa = require('koa')
const app = new Koa();

const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser'); //original
const cors = require('koa-cors'); //original

const router = require('./router');
const session = require('./services/session')

//Connect to mongodb
require('./models/db')

const PORT = 3000;

const corsOptions = {
     origin: true,
     credentials: true
   };

app
  .use(logger())
  .use(session)
  .use(bodyParser())
  .use(cors(corsOptions))
  .use(router.routes())

app
  .listen(PORT, console.log(`Server listening on port ${PORT}`))
