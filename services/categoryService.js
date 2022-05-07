const { Category } = require('../models');

const create = async ({ name }) => {
  const category = await Category.create({ name });
  return category;
};

const findAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const categoryService = {
  create,
  findAll,
};

module.exports = { categoryService };
