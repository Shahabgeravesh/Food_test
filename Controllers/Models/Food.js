//Creates tables of the database in the mysql workbench 

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Connection/Config');

class Food extends Model {}

Food.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Food_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Steps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Timers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    originalURL: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Food',
  }
);

module.exports = Food;