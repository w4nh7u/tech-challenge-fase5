const Users = require("../models/users.js");

module.exports = {
    findAll: async function (req, res) {
        const users = await Users.findAll().then((result) => res.json(result))
    },
    findById: async function (req, res) {
        await Users.findByPk(req.params.id).then((result) => res.json(result));
    },
    add: async function (req, res) {
        Users.create({
            name: req.body.name,
            email: req.body.email,
        }).then((result) => res.json(result))
    },
    update: async function (req, res) {
        await Users.update(
            {
                name: req.body.name,
                email: req.body.email,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        ).then((result) => res.json(result))
    },
    delete: async function (req, res) {
        await Users.destroy({
            where: {
                id: req.params.id,
            },
        }).then((result) => res.json(result))
    },
}