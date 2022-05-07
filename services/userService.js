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

const findAll = async () => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return users;
};

const userService = {
  create,
  findAll,
};

module.exports = { userService };
