const dbConfig = require("../config/config.js");

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db= {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});




Object.keys(db).forEach(Name => {
  if (db[Name].associate) {
    db[Name].associate(db);
  }
});

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.restaurants = require("./restaurant.model.js")(sequelize, Sequelize);
  db.users = require("./user.model.js")(sequelize, Sequelize);

  module.exports = db;