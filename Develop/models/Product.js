// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      types: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      types: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      types: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    catagoryId: {
      types: DataTypes.INTEGER, 
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

Category.hasMany(Product, {
  foreignKey: 'catagoryId',
});
Product.belongsTo(Category);

module.exports = Product;

