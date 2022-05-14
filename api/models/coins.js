'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coins.init({
    coin: DataTypes.STRING,
    fullname: DataTypes.STRING,
    amount: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Coins',
  });
  return Coins;
};