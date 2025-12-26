const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

// This token is used as a client identifier (and for recommendations), not for authz.
// Still, in production you should set JWT_SECRET to keep identifiers stable & non-forgeable.
const secret = process.env.JWT_SECRET || 'dev-secret-change-me';

const createToken = () => jwt.sign(
  {
    uuid: uuidv4(),
  },
  secret,
);

module.exports = async (ctx, next) => {
  let token;

  try {
    const authHeader = ctx.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      [, token] = authHeader.split('Bearer ');
      jwt.verify(token, secret);
    } else {
      token = createToken();
    }
  } catch (e) {
    token = createToken();
  }

  // set the token in the headers:
  ctx.set('X-Token', token);
  // in order to acces the token from the client:
  ctx.set('Access-Control-Expose-Headers', 'X-Token');

  // set also token as property in the ctx
  ctx.token = token;

  await next();
};
