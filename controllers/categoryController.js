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

const findAll = async (_req, res, next) => {
  try {
    const categories = await categoryService.findAll();
    return res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: ERROR });
  }
};

const categoryController = {
  create,
  findAll,
};

module.exports = { categoryController };
