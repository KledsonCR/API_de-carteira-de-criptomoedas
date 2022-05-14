'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transactions.init({
    value: DataTypes.DOUBLE,
    datetime: DataTypes.DATE,
    sendTo: DataTypes.INTEGER,
    receiveFrom: DataTypes.INTEGER,
    currentCotation: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};