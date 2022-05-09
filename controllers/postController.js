const { postService } = require('../services/postService');

const ERROR = 'Erro Interno';

const create = async (req, res, next) => {
  const { userId } = req;
  const { title, content, categoryIds } = req.body;
  const newPost = { userId, title, content, categoryIds };

  try {
    const post = await postService.create(newPost);
    res.status(201).json(post);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: ERROR });
  }
};

const findAll = async (req, res, next) => {
  try {
    const posts = await postService.findAll();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: ERROR });
  }
};

const postController = {
  create,
  findAll,
};

module.exports = { postController };
