const Places = require("../models/places.js");

module.exports = {
    findAll: async function (req, res) {
        await Places.findAll().then((result) => res.json(result))
    },
    findById: async function (req, res) {
        await Places.findByPk(req.params.id).then((result) => res.json(result));
    },
    add: async function (req, res) {
        await Places.create({
            name: req.body.name,
            capacity: req.body.capacity,
        }).then((result) => res.json(result))
    },
    update: async function (req, res) {
        await Places.update(
            {
                name: req.body.name,
                capacity: req.body.capacity,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        ).then((result) => res.json(result))
    },
    delete: async function (req, res) {
        await Places.destroy({
            where: {
                id: req.params.id,
            },
        }).then((result) => res.json(result))
    },
}