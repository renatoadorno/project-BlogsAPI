const { BlogPost, PostCategory, User, Category } = require('../models');

const create = async ({ userId, title, content, categoryIds }) => {
  const newPost = { userId, title, content };
  const post = await BlogPost.create(newPost);

  categoryIds.forEach(async (categoryId) => {
    const newPostCategory = { postId: post.id, categoryId };
    await PostCategory.create(newPostCategory);
  });

  const createdPost = await BlogPost.findByPk(post.id, {
    attributes: {
      exclude: ['published', 'updated'],
    },
  });

  return createdPost;
};

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

const postService = {
  create,
  findAll,
};

module.exports = { postService };
