const user = require('./userRoute');
const login = require('./loginRoute');

const route = {
  user,
  login,
};

module.exports = { route };
