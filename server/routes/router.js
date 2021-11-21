const express = require('express')
const route = express.Router()
const controller = require('../controller/controller')

/**
 * @description Post User Data Route
 * @method POST
 */

route.post("/api/users",controller.create)
route.get("/api/users",controller.find)
route.delete("/api/users/:id",controller.delete)
route.put("/api/users/:id",controller.update)

module.exports = route