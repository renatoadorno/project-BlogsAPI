const blogPostModel = (DataTypes) => ({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: { 
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
});

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', blogPostModel(DataTypes),
    {
      tableName: 'BlogPosts',
      createdAt: 'published',
      updatedAt: 'updated',
    });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return BlogPost;
};