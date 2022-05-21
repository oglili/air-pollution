// const Sequelize = require('sequelize');
// const db = new Sequelize ( {
//     HOST:'eu-cdbr-west-02.cleardb.net',
//     USER:'bf83118541a823',
//     PASSWORD: "5b220469",
//     DB: "heroku_7d4cc3976438d6a",
//     dialect:'mysql'
// });

// module.exports = db;


const Sequelize = require('sequelize');
const db = new Sequelize ('pollution', 'root', '', {
    host:'127.0.0.1',
    dialect:'mysql'
});

module.exports = db;