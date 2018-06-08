const generateUUID = require('uuid/v4');
const sessions = require('../models/sessions');

const session = async (ctx, next) => {

  let UUID = ctx.cookies.get('sessionID');
  // A year in miliseconds
  const cookieMaxAge = 3.154e+10;

  let session = ctx.session;
  // console.log('session is:', session);


  if (UUID && sessions[UUID]) {
    // renew the cookie
    ctx.cookies.set('sessionID', UUID, {maxAge: cookieMaxAge});
    // console.log('reviving cookie:', UUID);


  } else {
    if (UUID) {
      //if the sessions have been erased, kill the cookie
      ctx.cookies.set('sessionID', null, {maxAge:0});
    }
    // console.log('no sessions found, killing cookie:', UUID);


    UUID = generateUUID();

    ctx.cookies.set('sessionID', UUID, {maxAge: cookieMaxAge});
    // console.log('setting new cookie:', UUID);

    sessions[UUID] = {
      // username: ctx.request.body.username,
      sid: UUID,
      timeOfLog: Date.now(),
      // seenHobbies: []
    };

  }
  ctx.session = sessions[UUID];
  // console.log('sessions:', sessions);
  // console.log('current session:', ctx.session);
  await next();
};

module.exports = session;
