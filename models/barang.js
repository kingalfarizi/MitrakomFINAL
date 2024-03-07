'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Barang.init({
    ItemImg: DataTypes.STRING,
    ItemName: DataTypes.STRING,
    ItemDesc: DataTypes.STRING,
    ItemPrice: DataTypes.DECIMAL(10,2),
    Category: DataTypes.STRING,
    attributes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Barang',
  });
  return Barang;
};