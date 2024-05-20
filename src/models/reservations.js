const Sequelize =  require("sequelize");
const db = require("../../db.js");

const Reservations = db.define("reservations", {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    place: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    start: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    end: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Reservations