const getSessionId = async (ctx) => {
  // console.log('--------', ctx.cookies);
  const sessionId = ctx.cookies.get('sessionID');
  if (!sessionId) {
    console.log('no sessionId found');
    ctx.body = { error: 'no sessionId found' };
    ctx.status = 404;
    return;
  }
  ctx.body = {
    sessionId,
  };
  ctx.status = 200;
};

module.exports = {
  getSessionId,
};
