const { Sequelize } = require('sequelize');

const dbConfig = require('./../../configs/db.config');

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: dbConfig.database,
    username: dbConfig.user,
    password: dbConfig.password,
    host: dbConfig.host,
    port: dbConfig.port
  });



module.exports = sequelize;