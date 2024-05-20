const express = require("express")

const routes = express.Router()

// Users
const users = require("./src/controllers/users.js")
routes.get("/users", users.findAll)
routes.post("/users", users.add);
routes.get("/users/:id", users.findById);
routes.put("/users/:id", users.update);
routes.delete("/users/:id", users.delete);

// Places
const places = require("./src/controllers/places.js")
routes.get("/places", places.findAll)
routes.post("/places", places.add);
routes.get("/places/:id", places.findById);
routes.put("/places/:id", places.update);
routes.delete("/places/:id", places.delete);

// Reservations
const reservations = require("./src/controllers/reservations.js")
routes.get("/reservations", reservations.findAll)
routes.post("/reservations", reservations.add);
routes.get("/reservations/:id", reservations.findById);
routes.put("/reservations/:id", reservations.update);
routes.delete("/reservations/:id", reservations.delete);

module.exports = routes