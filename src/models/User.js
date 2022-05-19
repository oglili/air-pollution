const Sequelize = require('sequelize');
const db = require('../../db');

module.exports = db.define('User', {
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
})