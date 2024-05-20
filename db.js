const dbUser = 'user'
const dbHost = 'postgres'
const dbName = 'db'
const dbPassword = 'pass'

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    //passar os dados para o sequelize
    dialect: 'postgres', //informar o tipo de banco que vamos utilizar
    host: dbHost, //o host, neste caso estamos com um banco local
});

module.exports =  sequelize