// Dependencies
// Sequelize constructor
const Sequelize = require('sequelize');

// let sequelize;

// if (process.env.JAWSDB_URL){
//     console.log("running JAWS" + process.env.JAWSDB_URL);
//     sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//     console.log("running local" + process.env.DB_URI);
//     sequelize = new Sequelize(process.env.DB_URI);
// }

// module.exports = sequelize;

// const Sequelize = require('sequelize');

// dotenv for local environmental variables
require('dotenv').config();

// Create connection to database. Pass in your MySQL information for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
    console.log("running jaws" + process.env.JAWSDB_URL);
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
   console.log("running local" + process.env.JAWSDB_URI)
  sequelize = new Sequelize(
      
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;