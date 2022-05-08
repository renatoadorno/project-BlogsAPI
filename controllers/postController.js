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

const postController = {
  create,
};

module.exports = { postController };
