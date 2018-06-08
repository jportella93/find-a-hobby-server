getSessionId = async (ctx, next) => {
  // console.log('--------', ctx.cookies);
  const sessionId = ctx.cookies.get('sessionID')
  if (!sessionId) {
    console.log('no sessionId found');
    ctx.body = 'no sessionId found';
    ctx.status = 500;
    return;
  }
  ctx.body = {
    sessionId
  };
  ctx.status = 200;
  await next();
}

module.exports = {
  getSessionId,
}
