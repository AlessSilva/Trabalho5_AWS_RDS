'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.addColumn( "works", "created_at", { type: Sequelize.DATE, allowNull: false } );

    await queryInterface.addColumn( "works", "updated_at", { type: Sequelize.DATE, allowNull: false } );

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.removeColumn( "works", "created_at" );

    await queryInterface.removeColumn( "users", "update_at" );

  }
};
