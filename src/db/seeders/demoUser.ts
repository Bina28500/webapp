'use strict';
import { QueryInterface, Op, where } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface, Sequelize: any) => {
      return queryInterface.bulkInsert('Users', [{
        id: 1,
        balance: 10000,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },
    down: (queryInterface: QueryInterface, Sequelize: any) => {
      return queryInterface.bulkDelete('Users', {id: {[Op.eq]: 2}}, {});
    }
  };