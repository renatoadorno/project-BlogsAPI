const { User } = require('../models');
const { createToken } = require('../middlewares/jwt/createToken');

const create = async ({ displayName, email, password, image }) => {
  const user = await User.create({
    displayName,
    email,
    password,
    image,
  });

  return createToken(user.id);
};

const userService = {
  create,
};

module.exports = { userService };
