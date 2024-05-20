const Sequelize =  require("sequelize");
const db = require("../../db.js");

const Places = db.define("places", {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    capacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = Places