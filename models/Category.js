const categoryType = (DataTypes) => ({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
});

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', categoryType(DataTypes),
  {
    timestamps: false,
    tableName: 'Categories',
  });

  return Category;
};
