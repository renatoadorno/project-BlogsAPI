const Joi = require('joi');
const { Op } = require('sequelize');
const { Category } = require('../../models');

const createPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const createdPostValidation = (req, res, next) => {
  const { error } = createPostSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  next();
};

const existingCategoryValidation = async (req, res, next) => {
  const { categoryIds } = req.body;

  const categories = await Category.findAll({
    where: {
      id: {
        [Op.in]: categoryIds,
      },
    },
  });

  // categories e categoryIds devem retornar os mesmos valores, caso contrario ocorrera erro

  if (categories.length !== categoryIds.length) { // erro
    return res.status(400).json({
      message: '"categoryIds" not found',
    });
  }

  next();
};

const postValidation = [createdPostValidation, existingCategoryValidation];

module.exports = { postValidation };
