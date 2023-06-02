'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    static associate(models) {
      country.belongsTo(models.Users, { foreignKey: "userId", through: "countrybelongstoUser" })
    }
  }
  country.init({
    countryId: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    countryName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
        onDelete: "SET NULL",
      }
    }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'country',
  });
  return country;
};