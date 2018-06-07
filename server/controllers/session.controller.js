module.exports = getSessionId = (ctx) => {
  return ctx.cookies.get('sessionID')
}
