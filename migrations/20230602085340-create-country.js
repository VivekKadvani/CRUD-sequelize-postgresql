'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('countries', {
      countryId: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      countryName: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      timeStamps: false,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('countries');
  }
};