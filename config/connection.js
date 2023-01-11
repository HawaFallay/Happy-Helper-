const Sequelize = require('sequelize');
const mysql = require("mysql2");


// Enable access to .env variables
require('dotenv').config();
let sequelize;

// Use environment variables to connect to database
if (process.env.CLEARDB_DATABASE_URL) {
  sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL)
} else{ 

  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
  // not sure what port to use or select 
      port: 3306
    }
  );
}


module.exports = sequelize;