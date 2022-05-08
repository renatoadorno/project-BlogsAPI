const { BlogPost, PostCategory } = require('../models');

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

const postService = {
  create,
};

module.exports = { postService };
