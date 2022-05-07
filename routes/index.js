const user = require('./userRoute');
const login = require('./loginRoute');
const category = require('./categoryRoute');

const route = {
  user,
  login,
  category,
};

module.exports = { route };
