const Joi = require('joi');

const validateBody = Joi.object({
  name: Joi.string().required(),
});

const createdCategoryValidation = (req, res, next) => {
  const { error } = validateBody.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  next();
};

module.exports = {
  createdCategoryValidation,
};
