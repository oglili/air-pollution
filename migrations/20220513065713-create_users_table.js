'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     */
      await queryInterface.createTable('users', { 
        id:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    city:{
        type:Sequelize.STRING,
        allowNull:false
    },
    temp:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    desc:{
        type:Sequelize.TEXT,
        allowNull:false,
    },
    image:{
        type:Sequelize.STRING,
    },
    createdAt: {
            type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE,
    }, 
  
  });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
    */
    await queryInterface.dropTable('users');
    
  }
};
