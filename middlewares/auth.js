const jwt = require('jsonwebtoken');
const AuthorizationError = require('../errors/authorizationError');

let { JWT_SECRET } = process.env;

if (process.env.NODE_ENV !== 'production') {
  JWT_SECRET = 'dev';
}

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer')) {
    next(new AuthorizationError('Войдите используя почту и пароль.'));
    return;
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(new AuthorizationError('Войдите используя почту и пароль.'));
    return;
  }

  req.user = payload;

  next();
};
