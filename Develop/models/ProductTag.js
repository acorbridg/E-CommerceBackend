const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Tag = require('./Tag');
const Product = require('./Product');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      types: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      types: DataTypes.INTEGER,
    },
    tagId: {
      types: DataTypes.INTEGER,
    },
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

Product.belongsToMany(Tag, { through: ProductTag });
Tag.belongsToMany(Product, { through: ProductTag });
module.exports = ProductTag;
