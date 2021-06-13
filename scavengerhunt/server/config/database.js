const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

module.exports =  new Sequelize('hunt', 'postgres', '123', {
    host: 'localhost',
    dialect: "postgres"
});