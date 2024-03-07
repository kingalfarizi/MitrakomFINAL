'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orderDetail.init({
    idOrder: DataTypes.STRING,
    idBarang: DataTypes.STRING,
    kuantitas: DataTypes.INTEGER,
    totalHarga: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'orderDetail',
  });
  return orderDetail;
};