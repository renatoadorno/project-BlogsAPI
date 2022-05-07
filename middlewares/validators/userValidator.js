const Joi = require('joi');
const { User } = require('../../models');

const PASSWORD_MIN_LENGTH = 6;
const DISPLAY_NAME_MIN_LENGTH = 8;

const validateBody = Joi.object({
  displayName: Joi.string().min(DISPLAY_NAME_MIN_LENGTH).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(PASSWORD_MIN_LENGTH).required(),
  image: Joi.string().uri().required(),
});

const createdUserValidation = (req, res, next) => {
  const { error } = validateBody.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  next();
};

const singleUserValidation = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
};

const userValidation = [createdUserValidation, singleUserValidation];

module.exports = {
  userValidation,
};
