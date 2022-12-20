const Sequelize = require('sequelize');

// Enable access to .env variables
require('dotenv').config();

// Use environment variables to connect to database
const sequelize = new Sequelize(
  {
    host: 'localhost',
    dialect: 'mysql',
// not sure what port to use or select 
    port: 3306
  }
);

module.exports = sequelize;
