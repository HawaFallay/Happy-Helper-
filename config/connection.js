const Sequelize = require('sequelize');

// Enable access to .env variables
require('dotenv').config();
let sequelize;

// Use environment variables to connect to database
sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
// not sure what port to use or select 
    port: 3306
  }
);

module.exports = sequelize;
