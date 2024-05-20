const Reservations = require("../models/reservations.js");

module.exports = {
    findAll: async function (req, res) {
        await Reservations.findAll().then((result) => res.json(result))
    },
    findById: async function (req, res) {
        await Reservations.findByPk(req.params.id).then((result) => res.json(result));
    },
    add: async function (req, res) {
        await Reservations.create({
            place: req.body.place,
            date: req.body.date,
            start: req.body.start,
            end: req.body.end,
        }).then((result) => res.json(result))
    },
    update: async function (req, res) {
        await Reservations.update(
            {
                place: req.body.place,
                date: req.body.date,
                start: req.body.start,
                end: req.body.end,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        ).then((result) => res.json(result))
    },
    delete: async function (req, res) {
        await Reservations.destroy({
            where: {
                id: req.params.id,
            },
        }).then((result) => res.json(result))
    },
}