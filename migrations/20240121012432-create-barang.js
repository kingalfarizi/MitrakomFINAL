"use strict";

const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Barangs", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: () => uuidv4(),
      },
      ItemImg: {
        type: Sequelize.STRING,
      },
      ItemName: {
        type: Sequelize.STRING,
      },
      ItemDesc: {
        type: Sequelize.STRING,
      },
      ItemPrice: {
        type: Sequelize.DECIMAL(10, 2),
      },
      Category: {
        type: Sequelize.STRING,
      },
      attributes: {
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
    await queryInterface.dropTable("Barangs");
  },
};
