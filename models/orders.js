'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    idUser: DataTypes.STRING,
    metodePengiriman: DataTypes.STRING,
    metodePembayaran: DataTypes.STRING,
    idCard: DataTypes.STRING,
    promoCode: DataTypes.STRING,
    subtotal: DataTypes.DECIMAL,
    statusOrder: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};