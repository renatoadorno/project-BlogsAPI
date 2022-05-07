const { User } = require('../models');
const { createToken } = require('../middlewares/jwt/createToken');

const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return null;
  }

  const isPasswordValid = user.password === password;

  if (!isPasswordValid) {
    return null;
  }

  return createToken(user.id);
};

const loginService = {
  login,
};

module.exports = { loginService };
