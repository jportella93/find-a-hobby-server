const generateUUID = require('uuid/v4');
const sessions = {};

const session = async (ctx, next) => {

  let UUID = ctx.cookies.get('sessionID');
  // A year in miliseconds
  const cookieMaxAge = 3.154e+10;


  if (UUID && sessions[UUID]) {
    // renew the cookie
    ctx.cookies.set('sessionID', UUID, {maxAge: cookieMaxAge});


  } else {
    if (UUID) {
      //if the sessions have been erased, kill the cookie
      ctx.cookies.set('sessionID', null, {maxAge:0});
    }

    UUID = generateUUID();

    ctx.cookies.set('sessionID', UUID, {maxAge: cookieMaxAge});

    sessions[UUID] = {
      // username: ctx.request.body.username,
      sid: UUID,
      timeOfLog: Date.now()
    };

  }
  ctx.session = sessions[UUID];
  // console.log('sessions:', sessions);
  // console.log('current session:', ctx.session);
  await next();
};

module.exports = session;
