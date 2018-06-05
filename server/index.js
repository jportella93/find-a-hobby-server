"use strict";

const Koa = require('koa')
const app = new Koa();

const port = 3000;

app.use(async ctx => {
  ctx.body = '<h1>Find a hobby!</h1>'
})

app.listen(port, console.log('Koa connected'))
