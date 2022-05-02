const postCategoryType = (DataTypes) => ({
  postId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    foreignKey: true,
    references: {
      model: 'BlogPosts',
      key: 'id',
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    foreignKey: true,
    references: {
      model: 'Categories',
      key: 'id',
    },
  },
});

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', postCategoryType(DataTypes),
    { timestamps: false, tableName: 'PostsCategories' });

    PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};
