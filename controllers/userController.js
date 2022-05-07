const { userService } = require('../services/userService');

const create = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const newUser = { displayName, email, password, image };

  try {
    const userToken = await userService.create(newUser);
    return res.status(201).json({ token: userToken });
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: 'erro interno' });
  }
};

const userController = {
  create,
};

module.exports = {
  userController,
};
