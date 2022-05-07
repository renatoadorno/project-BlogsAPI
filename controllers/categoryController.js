const { categoryService } = require('../services/categoryService');

const ERROR = 'Erro Interno';

const create = async (req, res, next) => {
  const { name } = req.body;
  const categoryName = { name };

  try {
    const newCategory = await categoryService.create(categoryName);
    return res.status(201).json(newCategory);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: ERROR });
  }
};

const categoryController = {
  create,
};

module.exports = { categoryController };
