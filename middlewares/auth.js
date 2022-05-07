const { verifyToken } = require('./jwt/verifyToken');

const authValidation = (req, res, next) => { // authValidator.js
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  req.token = authorization;

  next();
};

const authUser = (req, res, next) => {
  const { token } = req;

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }

  req.userId = decoded.data;

  next();
};

const auth = [authValidation, authUser];

module.exports = { auth };
