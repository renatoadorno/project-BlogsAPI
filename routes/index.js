const user = require('./userRoute');
const login = require('./loginRoute');
const category = require('./categoryRoute');
const post = require('./postRoute');

const route = {
  user,
  login,
  category,
  post,
};

module.exports = { route };
