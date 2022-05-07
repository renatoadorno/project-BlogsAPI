require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (id) => {
  const token = jwt.sign({ data: id }, secret, jwtConfig);
  return token;
};

module.exports = {
  createToken,
};
