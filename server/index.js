'use strict';
const Koa = require('koa')
const app = new Koa();

const router = require('./router');

const bodyParser = require('koa-bodyparser');

//Connect to mongodb
require('./models/db')

const port = 3000;

app
  .use(bodyParser())
  .use(router.routes())
  .listen(port, console.log('Koa connected'))
