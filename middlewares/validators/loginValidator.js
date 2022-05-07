const Joi = require('joi');

const validateBody = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginValidation = (req, res, next) => {
  const { error } = validateBody.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  next();
};

module.exports = { loginValidation };
