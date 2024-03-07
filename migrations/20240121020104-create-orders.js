"use strict";
/** @type {import('sequelize-cli').Migration} */

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: () => uuidv4(),
      },
      idUser: {
        type: Sequelize.STRING,
      },
      metodePengiriman: {
        type: Sequelize.STRING,
      },
      metodePembayaran: {
        type: Sequelize.STRING,
      },
      idCard: {
        type: Sequelize.STRING,
      },
      promoCode: {
        type: Sequelize.STRING,
      },
      subtotal: {
        type: Sequelize.DECIMAL,
      },
      statusOrder: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
