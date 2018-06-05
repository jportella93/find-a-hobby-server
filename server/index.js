'use strict';
const Koa = require('koa')
const app = new Koa();

const router = require('./router');

//Connect to mongodb
require('./models/db')

const port = 3000;

app
  .use(router.routes())
  .listen(port, console.log('Koa connected'))
