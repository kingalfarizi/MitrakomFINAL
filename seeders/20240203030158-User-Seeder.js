"use strict";

const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("users", [
      {
        id: uuidv4(),
        email: "user@gmail.com",
        password: "12345678",
        fullname: "user",
        address: null,
        number: 812345,
        role: "user",
      },
      {
        id: uuidv4(),
        email: "mitrakom455@gmail.com",
        password: "mitrakom123",
        fullname: "admin",
        address: null,
        number: 81233214,
        role: "admin",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
