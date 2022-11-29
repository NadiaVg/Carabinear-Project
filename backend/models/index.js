const dbConfig = require("../config/db.config");

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(dbConfig.DB, 


  dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  const db= {};


Object.keys(db).forEach(Name => {
  if (db[Name].associate) {
    db[Name].associate(db);
  }
});

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.restaurants = require("./restaurant.model.js")(sequelize, Sequelize);

  module.exports = db;