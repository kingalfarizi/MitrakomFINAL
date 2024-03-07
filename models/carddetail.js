'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CardDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CardDetail.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    cardNumber: DataTypes.STRING,
    cvv: DataTypes.STRING,
    month: DataTypes.STRING,
    year: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CardDetail',
  });
  return CardDetail;
};