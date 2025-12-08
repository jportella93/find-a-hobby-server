const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const secret = process.env.JWT_SECRET;

const createToken = () => jwt.sign({
  uuid: uuidv4()
}, secret);

module.exports = async (ctx, next) => {
  let token;

  try {
    token = ctx.headers.authorization.split('Bearer ')[1];
    jwt.verify(token, secret);
  } catch(e) {
    token = createToken();
  }

  // set the token in the headers:
  ctx.set('X-Token', token);
  // in order to acces the token from the client:
  ctx.set('Access-Control-Expose-Headers', 'X-Token');

  // set also token as property in the ctx
  ctx.token = token;

  await next();


}
