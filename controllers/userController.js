const { userService } = require('../services/userService');

const ERROR = 'Erro Interno';

const create = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const newUser = { displayName, email, password, image };

  try {
    const userToken = await userService.create(newUser);
    return res.status(201).json({ token: userToken });
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: ERROR });
  }
};

const findAll = async (_req, res, next) => {
  try {
    const users = await userService.findAll();

    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: ERROR });
  }
};

const findById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await userService.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: ERROR });
  }
};

const userController = {
  create,
  findAll,
  findById,
};

module.exports = {
  userController,
};
